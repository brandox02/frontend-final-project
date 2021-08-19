


import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SideNavigationBar from '../../components/SideNavigationBar'
import store from '../../redux/store'
import Categoria from './categorias'


export default function Index() {

   return (
      <Provider store={store} >
         <div className='container-fluid'>
            <Categoria />
         </div>
      </Provider>
   )
}
