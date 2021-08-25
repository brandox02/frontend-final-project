import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddProductoAction from '../../../redux/actions/ProductoActions/AddProductoAction'
import UpdateProductoAction from '../../../redux/actions/ProductoActions/UpdateProductoAction'
import { State } from '../../../redux/store'
import { Producto } from '../../../redux/types/Entities'
import RenderTable from './RenderTable'



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
   const state = useSelector((state: State) => state.productos)
   const stateCategorias = useSelector((state: State) => state.categorias)
   const dispatch = useDispatch()
   const [categoriaId, setCategoriaId] = useState<number>(-1)


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
      // setTxtNombre(state.nombre)
      // setTxtImagen(state.imagen)
      // setTxtPrecio(state.precio)
      // setTxtStock(state.stock)
      // setTxtStock(state.categoria.)

   }, [state])

   useEffect(() => {
      const data = state.find(producto => producto.id === selectedIndex)
      if (isUpdating) {
         setTxtNombre(data.nombre)
         setTxtImagen(data.imagen)
         setTxtPrecio(data.precio)
         setTxtStock(data.stock)
         setTxtCategoria(data.categoria.nombre.toString())
      } else {
         setTxtNombre('')
         setTxtImagen('')
         setTxtPrecio(0)
         setTxtStock(0)
         setTxtCategoria('')
      }
   }, [isUpdating, selectedIndex])

   function save() {
      if (isUpdating) {
         if (txtCategoria === '') {
            alert('debes seleccionar una categoria')
            return
         }
         const toSend = {
            id: selectedIndex,
            nombre: txtNombre,
            imagen: txtImagen,
            precio: txtPrecio,
            stock: txtStock,
            categoriaId: stateCategorias.find(c => c.nombre === parseInt(txtCategoria)).id
         }
         console.log(toSend)
         dispatch(UpdateProductoAction(toSend))
        
      } else {

         if (txtCategoria === '') {
            alert('debes seleccionar una categoria')
            return
         }
         const toSend = {
            nombre: txtNombre,
            imagen: txtImagen,
            precio: txtPrecio,
            stock: txtStock,
            categoriaId: stateCategorias.find(c => c.nombre === parseInt(txtCategoria)).id
         }
         console.log(toSend)
         dispatch(AddProductoAction(toSend))
      }
   }

   return <div className='row ' style={{
      // backgroundColor: 'EEEEEE',
      height: '100%'
   }}>
      <h2 className="text-center">Administrar Productos</h2>
      <div className='col-12 d-flex align-items-center overflow-auto mt-5' style={{ height: '300px' }}>
         <RenderTable>
            {{ productosData: state, setSelectedIndex, selectedIndex, setCategoriaId }}
         </RenderTable>
      </div>
      <div className='col-12 border-right d-flex justify-content-center flex-wrap mt-5'>
         <div className='p-4 text-center w-40' style={{ transform: 'scale(.9)', height: '80%', overflow: 'auto' }}>
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
            <select className='mb-3' value={txtCategoria} onChange={e => {
               setTxtCategoria(e.currentTarget.value)
            }}>
               {stateCategorias.map((categoria, index) => <option key={categoria.id}>{categoria.nombre}</option>)}

            </select> <br />
            <button onClick={save}>Salvar Cambios</button>
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