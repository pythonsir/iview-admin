import {goodsAttrbuteLis,gttributeGroup} from '@/api/goods-attribute'

export default {
    state: {
    
    },
    mutations: {
  
    },
    actions: {
        handelGoodsAttrbuteList({},data){
            return new Promise((resolve,reject) => {

                goodsAttrbuteLis(data).then(res => {
                    const data = res.data;
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })

            })

        },
        handelAttributeGroup({},data){
            return new Promise((resolve,reject) => {

                gttributeGroup().then(res => {
                    const data = res.data;
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })

            })

        }
    }

}