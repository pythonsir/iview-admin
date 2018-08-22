import { getCategory,getTopCategory } from '@/api/category'

export default {
  state: {
    
  },
  mutations: {

  },
  actions: {
    handelGetCategory ({},data) {
      return new Promise((resolve, reject) => {
        getCategory(data).then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    handelTopCategory(){
      return new Promise((resolve, reject) => {
        getTopCategory().then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })


    }
  }
}
