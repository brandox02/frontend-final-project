import React from 'react';
import Link from 'next/link'
import {useRouter } from 'next/router'

const styles = {
   width: '100%',
   height: '100vh',
   backgroundColor: '#F4F6F7',
   color: 'black',
   textAlign: 'center',
   display: 'flex',
   alignItems: 'space-between',
   flexWrap: 'wrap',
   justifyContent:'center',
   border:'1px solid #6C6C6C'
}

const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}

function Item({ label, route }) {
   const router = useRouter()
   const isCurrentRoute = router.route == route
   return <div style={isCurrentRoute ? selectedStyle: {}}>
      <Link href={route}>
         <a style={{color: 'black'}}>{label}</a>
      </Link>
      <hr />
   </div>
}

export default function SideNavigationBar() {
   
   
   return (
      <div className="" style={styles}>
         <div><h3>Menu de Navegacion</h3></div>
         <div className =''>
            <Item label='Categorias' route='/administration/categorias'/>
            <Item label='Usuarios' route='/administration/usuarios'/>
            <Item label='Productos' route='/administration/productos'/>
            <Item label='Clientes' route='/administration/clientes'/>
            <Item label='Cumpleanos' route='/administration/cumpleanos'/>
            <Item label='Pedidos' route='/administration/pedidos' />
         </div>
      </div>
   );
}