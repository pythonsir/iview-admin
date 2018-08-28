import { getCategory,getTopCategory,saveCategory,deleteData,getCategoryInfo,saveEditorCategory } from '@/api/category'

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
    },
    handelSaveCategory({},data){
      return new Promise((resolve,reject) => {
        saveCategory(data).then(res => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    handelDeleteData({},data){
      return new Promise((resolve,reject)=>{
          deleteData(data).then(res => {
            const data = res.data;
            resolve(data)
          }).catch(err => {
            reject(err)
          })
      })
    },
    handelSaveEditorCategory({},data){
      return new Promise((resolve,reject)=>{
        saveEditorCategory(data).then(res => {
          const data = res.data;
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    handelGetCategoryInfo({},data){
      return new Promise((resolve,reject) => {
        getCategoryInfo(data).then(res => {
          const data = res.data;
          resolve(data)
        }).catch(err => {
          reject(err)
        })

      })
    }
  }
}
