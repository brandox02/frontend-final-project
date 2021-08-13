


export interface Categoria {
   id?: Number,
   nombre: string
}

export interface Usuario {
   id?: Number,
   nombreCompleto: string,
   nombreUsuario: string,
   contrasena: string,
}

export interface Producto {
   id?: Number,
   nombre: string,
   imagen: string,
   precio: Number,
   stock: Number,
   categoria: Categoria,
   categoriaId: Number
}

export enum EstadoOrden {
   EN_PROCESO,
   FINALIZADO
}

export enum EstadoPedido {
   PROCESANDO_ENVIO,
   DE_CAMINO,
   RECIBIDO
}

export interface DetalleOrden {
   id?: Number,
   producto: Producto,
   productoId: Number
   cantidad: Number,
   orden: Orden,
   ordenId: Number
}

export interface Orden {
   id?: Number,
   fecha: Date,
   comentarioDireccion: string,
   estadoOrden: EstadoOrden,
   cliente: Cliente | Number,
   detalleOrden?: Array<DetalleOrden>
}

export interface Cliente {
   id?: Number,
   nombreCompleto: String,
   email: String,
   nombreUsuario: String,
   contrasena: String,
   numeroContacto: Number,
   longitud: Number,
   latitud: Number,
   direccion: String,
   fechaNacimiento: Date
}

export interface Pedido {
   id?: Number,
   longitud: Number,
   latitud: Number,
   orden: Orden ,
   ordenId: Number
   estadoPedido: EstadoPedido
}