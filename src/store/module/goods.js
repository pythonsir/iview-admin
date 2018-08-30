import {getCategoryList} from '@/api/goods'


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
        }

    }

}