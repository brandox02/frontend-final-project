import React from 'react'
import { Usuario } from '../../../redux/types/Entities'

interface IProps {
   children: {
      usuariosData: Usuario[],
      setSelectedIndex: (index: number) => void,
      selectedIndex: number
   }
}

const selectedStyle = {
   backgroundColor: '#7FB4E5',
   color: 'white'
}

function RenderTable({ children: { selectedIndex, setSelectedIndex, usuariosData } }: IProps) {

   return (
      <table className="table border" style={{ transform: 'scale(0.9)' }}>
         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Nombre Completo</th>
               <th scope="col">Nombre de Usuario</th>
               <th scope="col">Contrasena</th>
            </tr>
         </thead>
         <tbody>
            {usuariosData.map((usuario, index) => (
               <tr onClick={() => setSelectedIndex(index)} key={usuario.id.toString()}
                  style={selectedIndex == index ? selectedStyle : {}}
               >
                  <th scope="row">{usuario.id}</th>
                  <td>{usuario.nombreCompleto}</td>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.contrasena}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default RenderTable;