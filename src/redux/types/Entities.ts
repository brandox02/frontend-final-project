
export interface ApiResponse<T> {
   token: string,
   exito: number,
   mensaje: string,
   ls: T
}

export interface Categoria {
   id?: number,
   nombre: number
}

export interface Usuario {
   id?: number,
   nombreCompleto: string,
   nombreUsuario: string,
   contrasena: string,
}

export interface Producto {
   id?: number,
   nombre: string,
   imagen: string,
   precio: number,
   stock: number,
   categoria?: Categoria,
   categoriaId?: number
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
   nombreCompleto: string,
   email: string,
   nombreUsuario: string,
   contrasena: string,
   numeroContacto?: Number,
   longitud: Number,
   latitud: Number,
   direccion: string,
   fechaNacimiento: string
}

export interface Pedido {
   id?: Number,
   longitud: Number,
   latitud: Number,
   orden: Orden,
   ordenId: Number
   estadoPedido: EstadoPedido
}