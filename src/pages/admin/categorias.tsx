import React, { useEffect, useState } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar'


const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}


export default function Categorias() {
   // index of row selected
   const [selectedIndex, setSelectedIndex] = useState(-1)
   // data to render
   const categoriasData = [{ id: 1, nombre: 'Zapatos' }, { id: 2, nombre: 'Deportes' }]
   // mode: updating or inserting
   const [isUpdating, setIsUpdating] = useState(false)
   // input state
   const [txt, setTxt] = useState('')

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


   useEffect(() => {
      if (isUpdating) {
         setTxt(categoriasData[selectedIndex].nombre)
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
                        <button>Salvar Cambios</button>
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
                              <tr onClick={() => setSelectedIndex(index)}
                                 style={selectedIndex == index ? selectedStyle : {}}
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