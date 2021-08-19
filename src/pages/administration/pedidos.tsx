import React from 'react'
// import Map from './Map'
import Pedido from '../../components/Pedidos/Pedidos'
import SideNavigationBar from '../../components/SideNavigationBar'


export default function pedido() {

   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='col-2'>
               <SideNavigationBar />
            </div>
            <div className='col-10'>
               <div className='border row' style={{ height: '100vh' }}>
                  <Pedido />
               </div >

            </div>
         </div>
      </div>
   )
}