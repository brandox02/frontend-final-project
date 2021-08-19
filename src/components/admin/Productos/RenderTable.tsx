import React from 'react'
import { Producto } from '../../redux/types/Entities'

interface IProps {
   children: {
      productosData: Producto[],
      setSelectedIndex: (index: number) => void,
      selectedIndex: Number
   }
}

const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}

function RenderTable({ children: { selectedIndex, setSelectedIndex, productosData } }: IProps) {

   return (
      <table className="table border" style={{ transform: 'scale(1)' }}>
         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Nombre</th>
               <th scope="col">Imagen</th>
               <th scope="col">Precio</th>
               <th scope="col">Stock</th>
               <th scope="col">Categoria</th>
            </tr>
         </thead>
         <tbody>
            {productosData.map((producto, index) => (
               <tr onClick={() => setSelectedIndex(index)} key={producto.id.toString()}
                  style={selectedIndex == index ? selectedStyle : {}}
               >
                  <th scope="row">{producto.id}</th>
                  <td>{producto.nombre}</td>
                  <td>{producto.imagen}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.categoria.nombre}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default RenderTable;