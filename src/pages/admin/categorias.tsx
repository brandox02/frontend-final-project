import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideNavigationBar from '../../components/SideNavigationBar'
import AddCategoriaAction from '../../redux/actions/CategoriaActions/AddCategoriaAction'
import UpdateCategoriaAction from '../../redux/actions/CategoriaActions/UpdateCategoriaAction'
import { State } from '../../redux/store'


const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}


export default function Categorias() {
   // index of row selected
   const [selectedIndex, setSelectedIndex] = useState(-1)
   // data to render
   const [categoriasData, setCategoriasData] = useState([])
   const [_, render] = useReducer(x => x + 1, 0)
   // mode: updating or inserting
   const [isUpdating, setIsUpdating] = useState(false)
   // input state
   const [txt, setTxt] = useState('')
   const dispatch = useDispatch()
   const state = useSelector((state: State) => state.categorias)

   useEffect(() => {
      setCategoriasData(state)
      console.log('cambio')
      render()
   }, [state])

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
         dispatch(UpdateCategoriaAction({ id: selectedIndex, nombre: parseInt(txt) }))
      } else {
         dispatch(AddCategoriaAction({ nombre: parseInt(txt) }))
      }
   }


   useEffect(() => {
      if (isUpdating) {
         const str = categoriasData.find(categoria => categoria.id === selectedIndex).nombre.toString()
         setTxt(str)
      } else {
         setTxt('')
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
                           placeholder='Ingresalo...' value={txt} onChange={e => setTxt(e.currentTarget.value)}
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
                           </tr>
                        </thead>
                        <tbody>
                           {categoriasData.map((categoria, index) => (
                              <tr onClick={() => {
                                 setSelectedIndex(categoria.id)

                              }}
                                 style={selectedIndex == categoria.id ? selectedStyle : {}}
                              >
                                 <th scope="row">{categoria.id}</th>
                                 <td>{categoria.nombre}</td>
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