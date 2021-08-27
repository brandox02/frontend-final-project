import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'


const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}

function Item({ label, route }) {
   const router = useRouter()
   const isCurrentRoute = router.route == route
   return <div style={isCurrentRoute ? selectedStyle : {}}>
      <Link href={route}>
         <a style={{ color: 'black' }}>{label}</a>
      </Link>
      <hr />
   </div>
}

export default function SideNavigationBar() {


   return (
      <div className="" style={{
         width: '100%',
         height: '100vh',
         backgroundColor: '#F4F6F7',
         color: 'black',
         textAlign: 'center',
         display: 'flex',
         alignItems: 'space-between',
         flexWrap: 'wrap',
         justifyContent: 'center',
         border: '1px solid #6C6C6C'
      }}>
         <div><h3>Menu de Navegacion</h3></div>
         <div className=''>
            <Item label='Categorias' route='/admin/categorias' />
            <Item label='Usuarios' route='/admin/usuarios' />
            <Item label='Productos' route='/admin/productos' />
            <Item label='Clientes' route='/admin/clientes' />
            <Item label='Cumpleanos' route='/admin/cumpleanos' />
            <Item label='Pedidos' route='/admin/pedidos' />
         </div>
      </div>
   );
}