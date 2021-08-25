import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideNavigationBar from '../../SideNavigationBar'
import AddClienteAction from '../../../redux/actions/ClienteActions/AddClienteAction'
import DeleteUsuarioAction from '../../../redux/actions/ClienteActions/DeleteUsuarioAction'
import { State } from '../../../redux/store'
import UpdateCategoriaAction from '../../../redux/actions/CategoriaActions/UpdateCategoriaAction'
import UpdateClienteAction from '../../../redux/actions/ClienteActions/UpdateClienteAction'


const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}


export default function Cliente() {
   // index of row selected
   const [selectedIndex, setSelectedIndex] = useState(-1)
   // data to render
   const [clientesData, setClientesData] = useState([])
   const [_, render] = useReducer(x => x + 1, 0)
   // mode: updating or inserting
   const [isUpdating, setIsUpdating] = useState(false)
   // input state
   const [NombreCompleto, setNombreCompleto] = useState('')
   const [Mail, setMail] = useState('')
   const [NombreUsuario, setNombreUsuario] = useState('')
   const [Contrasena, setContrasena] = useState('')
   const [NumeroContacto, setNumeroContacto] = useState('')
   const [Direccion, setDireccion] = useState('')
   const [FechaNacimiento, setFechaNacimiento] = useState('')
   const dispatch = useDispatch()
   const state = useSelector((state: State) => state.clientes)

   useEffect(() => {
      setClientesData(state)
      console.log('cambio')
      render()
   }, [state])
   // console.log(state)
   function handlerSwitch() {
      if (!isUpdating) {
         if (selectedIndex == -1) {
            alert('Debes seleccionar alguna categoria para poder modificarla')
         } else {
            setIsUpdating(!isUpdating)
         }
      } else {
         setIsUpdating(!isUpdating)
         setSelectedIndex(-1)
      }
   }

   function save() {
      if (isUpdating) {
         navigator.geolocation.getCurrentPosition((position) => {

            const toSend = {
               id: selectedIndex,
               nombreCompleto: NombreCompleto, email: Mail, contrasena: Contrasena, direccion: Direccion,
               fechaNacimiento: FechaNacimiento, nombreUsuario: NombreUsuario,
               longitud: parseInt(position.coords.longitude.toPrecision(1)), latitud: parseInt(position.coords.latitude.toPrecision(1))
            }
            dispatch(UpdateClienteAction(toSend))
         })
      } else {
         navigator.geolocation.getCurrentPosition((position) => {
            const toSend = {
               nombreCompleto: NombreCompleto, email: Mail, contrasena: Contrasena, direccion: Direccion,
               fechaNacimiento: FechaNacimiento, nombreUsuario: NombreUsuario,
               longitud: parseInt(position.coords.longitude.toPrecision(1)), latitud: parseInt(position.coords.latitude.toPrecision(1))
            }
            // const toSend ={
            //    "contrasena": "fsd",
            //    "direccion": "fds",
            //    "email": "brandon@gmail.com",
            //    "fechaNacimiento": "2021-08-06",
            //    "latitud": 18,
            //    "longitud": -69,
            //    "nombreCompleto": "fsd",
            //    "nombreUsuario": "fds"

            //    }
            console.log(toSend)
            dispatch(AddClienteAction(toSend))
         })
      }
   }
   useEffect(() => {
      if (isUpdating) {
         const str = clientesData.find(cliente => cliente.id === selectedIndex)
         setNombreCompleto(str.nombreCompleto)
         setMail(str.email)
         setNombreUsuario(str.nombreUsuario)
         setContrasena(str.contrasena)
         setNumeroContacto(str.numeroContacto)
         setDireccion(str.direccion)
         setFechaNacimiento(str.fechaNacimiento)
         // setTxt(str)
         console.log(str)
      } else {
         // setTxt('')
      }
   }, [isUpdating, selectedIndex])
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='col-2'>
               <SideNavigationBar />
            </div>
            <div className='col-10'>
               <div className='row' style={{
                  // backgroundColor: 'EEEEEE',
                  height: '100%'
               }}>
                  <div className='col-5 border-right d-flex align-items-center flex-wrap'>
                     <div className='border p-4 text-center'>
                        <label className='fw-bold'>
                           {isUpdating ? 'Actualizando Categoria' : 'Agregando Categoria'}
                        </label>
                        <input className='p-1 my-2 w-100' type='text'
                           placeholder='Nombre completo' value={NombreCompleto} onChange={e => setNombreCompleto(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='text'
                           placeholder='mail' value={Mail} onChange={e => setMail(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='text'
                           placeholder='Nombre de Usuario' value={NombreUsuario} onChange={e => setNombreUsuario(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='text'
                           placeholder='Contrasena' value={Contrasena} onChange={e => setContrasena(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='number'
                           placeholder='Numero de Contacto' value={NumeroContacto} onChange={e => setNumeroContacto(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='text'
                           placeholder='Direccion' value={Direccion} onChange={e => setDireccion(e.currentTarget.value)}
                        />
                        <input className='p-1 my-2 w-100' type='date'
                           placeholder='fechaNacimiento' value={FechaNacimiento} onChange={e => setFechaNacimiento(e.currentTarget.value)}
                        />
                        <button onClick={save}>Salvar Cambios</button>
                        <div className=' my-4 d-flex justify-content-around'>
                           <button onClick={handlerSwitch}
                           >{isUpdating ? 'Agregar Nueva' : 'Actualizar existente'}
                           </button>
                           <button>Eliminar</button>
                        </div>
                     </div>
                  </div>
                  <div className='col-7 d-flex align-items-center'>
                     <table className="table border">
                        <thead>
                           <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Mail</th>
                              <th scope="col">Nombre Usuario</th>
                              <th scope="col">Contrasena</th>
                              <th scope="col">Numero Contacto</th>
                              <th scope="col">Direccion</th>
                              <th scope="col">Fecha Nacimiento</th>
                              <th scope="col">Latitud</th>
                              <th scope="col">Longitud</th>
                           </tr>
                        </thead>
                        <tbody>
                           {clientesData && clientesData.map((cliente, index) => (
                              <tr onClick={() => {
                                 setSelectedIndex(cliente.id)
                              }}
                                 style={selectedIndex == cliente.id ? selectedStyle : {}}
                              >
                                 <th scope="row">{cliente.id}</th>
                                 <td>{cliente.nombreCompleto}</td>
                                 <td>{cliente.mail}</td>
                                 <td>{cliente.nombreUsuario}</td>
                                 <td>{cliente.numeroContacto}</td>
                                 <td>{cliente.contrasena}</td>
                                 <td>{cliente.direccion}</td>
                                 <td>{cliente.fechaNacimiento}</td>
                                 <td>{cliente.latitud}</td>
                                 <td>{cliente.longitud}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div >

            </div>
         </div>
      </div>
   )

}
