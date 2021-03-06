import { Categoria, ApiResponse } from "../redux/types/Entities";
import  { AxiosResponse } from 'axios'
import axios from '../baseAxios'


class CategoriaServices {

   async getCategorias(): Promise<Array<Categoria>> {
      const url = '/api/Categoriums'
      const res: AxiosResponse<ApiResponse<Categoria[]>> = await axios.get(url)
      return res.data.ls
   }

   async addCategoria(categoria: Categoria): Promise<Categoria> {
      const url = '/api/Categoriums'
      const res: AxiosResponse<Categoria> = await axios.post(url, categoria)
      return res.data
   }

   async updateCategoria(categoria: Categoria): Promise<boolean> {
      try {

         const url = '/api/Categoriums/' + categoria.id
         await axios.put(url, categoria)
         return true
      } catch {
         return false
      }
   }

   async deleteCategoria(id: Number): Promise<boolean> {
      const url = '/api/Categoriums'
      try {
         await axios.delete(url + '/' + id)
         return true
      }
      catch {
         return false
      }
   }
}

export default new CategoriaServices()