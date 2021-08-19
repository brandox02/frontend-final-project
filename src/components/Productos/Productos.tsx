import React, { useState, useEffect } from 'react'
import { Producto } from '../../redux/types/Entities'
import RenderTable from './RenderTable'

const productosData: Producto[] = [
   {
      id: 0,
      nombre: 'mango',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-mango.png',
      precio: 30,
      stock: 304,
      categoria: { nombre: 'frutas', id: 0 },

   },
   {
      id: 1,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   },
   {
      id: 2,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   },
   {
      id: 3,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   },
   {
      id: 4,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   },
   {
      id: 5,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   },
   {
      id: 6,
      nombre: 'fresa',
      imagen: 'https://enalgunlugardelaweb.com/mi-imagen-de-fresa.png',
      precio: 35,
      stock: 221,
      categoria: { nombre: 'frutas', id: 0 },
   }


]

export default function Productos() {
   // index of row selected
   const [selectedIndex, setSelectedIndex] = useState(-1)
   // mode: updating or inserting
   const [isUpdating, setIsUpdating] = useState(false)
   // input state
   const [txtNombre, setTxtNombre] = useState('')
   const [txtImagen, setTxtImagen] = useState('')
   const [txtPrecio, setTxtPrecio] = useState(0)
   const [txtStock, setTxtStock] = useState(0)
   const [txtCategoria, setTxtCategoria] = useState('nombre')


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
         setTxtNombre(productosData[selectedIndex].nombre)
         setTxtImagen(productosData[selectedIndex].imagen)
         setTxtPrecio(productosData[selectedIndex].precio)
         setTxtStock(productosData[selectedIndex].stock)
         setTxtCategoria(productosData[selectedIndex].categoria.nombre)
      } else {
         setTxtNombre('')
         setTxtImagen('')
         setTxtPrecio(0)
         setTxtStock(0)
         setTxtCategoria('')
      }
   }, [isUpdating, selectedIndex])


   return <div className='row ' style={{
      // backgroundColor: 'EEEEEE',
      height: '100%'
   }}>
      <h2 className="text-center">Administrar Productos</h2>
      <div className='col-12 d-flex align-items-center overflow-auto mt-5' style={{ height: '40%' }}>
         <RenderTable>
            {{ productosData, setSelectedIndex, selectedIndex }}
         </RenderTable>
      </div>
      <div className='col-12 border-right d-flex justify-content-center flex-wrap'>
         <div className='p-4 text-center w-40' style={{ transform: 'scale(.9)',height:'80%',overflow:'auto' }}>
            <label className='fw-bold'>
               {isUpdating ? 'Actualizando Producto' : 'Agregando Producto'}
            </label>
            <input className='p-1 my-2 w-100' type='text' placeholder='Ingresa nombre'
               onChange={e => setTxtNombre(e.currentTarget.value)} value={txtNombre}
            />
            <input className='p-1 my-2 w-100' type='text' placeholder='Ingresa imagen'
               onChange={e => setTxtImagen(e.currentTarget.value)} value={txtImagen}
            />
            <div>
               <label>Precio</label>
               <input className='p-1 my-2 w-100' type='number' placeholder='Ingresa precio'
                  onChange={e => setTxtPrecio(Number(e.currentTarget.value))} value={txtPrecio}
               />
            </div>
            <div>
            <label>Stock</label>
            <input className='p-1 my-2 w-100' type='number' placeholder='Ingresalo el Stock'
               onChange={e => setTxtStock(Number(e.currentTarget.value))} value={txtStock}
            />
            </div>
            <select className='mb-3' value={txtCategoria} onChange={e => setTxtCategoria(e.currentTarget.value)}>
               {productosData.map((producto, index) => <option key={producto.id}>{producto.categoria.nombre}</option>)}

            </select> <br />
            <button>Salvar Cambios</button>
            <div className=' my-4 d-flex justify-content-around'>
               <button onClick={handlerSwitch}
               >{isUpdating ? 'Agregar Nuevo' : 'Actualizar existente'}
               </button>
               <button>Eliminar</button>
            </div>
         </div>
      </div>
   </div >
}