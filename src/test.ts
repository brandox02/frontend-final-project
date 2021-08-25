import CategoriaServices from "./services/CategoriaServices"


export async function test() {

   const body = {
      nombre: 22
   }

   // const realData = await CategoriaServices.deleteCategoria(3)
   // const realData = await CategoriaServices.addCategoria(body)
   const realData = await CategoriaServices.getCategorias()
   console.log(realData)
}

test()