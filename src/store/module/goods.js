import {getCategoryList,getGoodsList} from '@/api/goods'


export default {


    actions:{

        handelGetCategoryList(){

            return new Promise((resolve, reject) => {
                getCategoryList().then(res => {
                  const data = res.data
                  resolve(data)
                }).catch(err => {
                  reject(err)
                })
              })
        },
        handelGetGoodsList({},data){
            return new Promise((resolve,reject) => {

                getGoodsList(data).then(res => {
                    const data = res.data
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })

            })

        }

    }

}