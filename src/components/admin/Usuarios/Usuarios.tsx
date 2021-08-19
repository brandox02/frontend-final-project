import React, { useState, useEffect } from 'react'
import RenderTable from './RenderTable'





export default function Usuarios() {
   // index of row selected
   const [selectedIndex, setSelectedIndex] = useState(-1)
   const usuariosData = [
      { id: 1, nombreCompleto: 'Juan Hernandez', nombreUsuario: 'juancho2', contrasena: 'juancho2pass' },
      { id: 2, nombreCompleto: 'Brandon Hernandez', nombreUsuario: 'Brandon2', contrasena: 'Brandon2pass' }
   ]
   // mode: updating or inserting
   const [isUpdating, setIsUpdating] = useState(false)
   // input state
   const [txtNombreCompleto, setTxtNombreCompleto] = useState('')
   const [txtNombreUsuario, setTxtNombreUsuario] = useState('')
   const [txtContrasena, setTxtContrasena] = useState('')


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
         setTxtNombreCompleto(usuariosData[selectedIndex].nombreCompleto)
         setTxtNombreUsuario(usuariosData[selectedIndex].nombreUsuario)
         setTxtContrasena(usuariosData[selectedIndex].contrasena)
      } else {
         setTxtNombreCompleto('')
         setTxtNombreUsuario('')
         setTxtContrasena('')
      }
   }, [isUpdating, selectedIndex])


   return <div className='row ' style={{
      // backgroundColor: 'EEEEEE',
      height: '100%'
   }}>
      <div className='col-5 border-right  d-flex align-items-center flex-wrap'>
         <div className='border p-4 text-center'>
            <label className='fw-bold'>
               {isUpdating ? 'Actualizando Usuario' : 'Agregando Usuario'}
            </label>
            <input className='p-1 my-2 w-100' type='text' placeholder='Ingresa nombre completo'
               onChange={e => setTxtNombreCompleto(e.currentTarget.value)} value={txtNombreCompleto}
            />
            <input className='p-1 my-2 w-100' type='text' placeholder='Ingresalo nombre de usuario'
               onChange={e => setTxtNombreUsuario(e.currentTarget.value)} value={txtNombreUsuario}
            />
            <input className='p-1 my-2 w-100' type='text' placeholder='Ingresalo contrasena'
               onChange={e => setTxtContrasena(e.currentTarget.value)} value={txtContrasena}
            />
            <button>Salvar Cambios</button>
            <div className=' my-4 d-flex justify-content-around'>
               <button onClick={handlerSwitch}
               >{isUpdating ? 'Agregar Nuevo' : 'Actualizar existente'}
               </button>
               <button>Eliminar</button>
            </div>
         </div>
      </div>
      <div className='col-7 d-flex align-items-center'>
         <RenderTable>
            {{ usuariosData, setSelectedIndex, selectedIndex }}
         </RenderTable>
      </div>
   </div >
}