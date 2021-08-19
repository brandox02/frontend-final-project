import React, { useState } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar'
import Productos from '../../components/admin/Productos/Productos'


export default function _Productos() {
   
   return <div className='container-fluid'>
   <div className='row'>
      <div className='col-2'>
         <SideNavigationBar />

      </div>
      <div className='col-10'>
         fds
         <Productos />
      </div>
   </div>
</div>
}