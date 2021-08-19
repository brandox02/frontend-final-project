import React, { useState, useEffect } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar'
import Usuarios from '../../components/admin/Usuarios/Usuarios'

const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}


export default function usuarios() {

   return <div className='container-fluid'>
      <div className='row'>
         <div className='col-2'>
            <SideNavigationBar />
         </div>
         <div className='col-10'>
            <div className='border row' style={{ height: '100vh' }}>

               <div className='w-100 border' style={{ height: '100vh' }}>
                  <Usuarios />
               </div >
            </div >

         </div>
      </div>
   </div>

}