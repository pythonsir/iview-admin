import {goodsAttrbuteLis,gttributeGroup} from '@/api/goods-attribute'

export default {
    state: {
        attribute_category_list:[]
    },
    mutations: {
        setAttributeCategoryList(state,list){
            state.attribute_category_list = list;
        }
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
        handelAttributeGroup({commit}){
            return new Promise((resolve,reject) => {

                gttributeGroup().then(res => {
                    const data = res.data;
                    commit('setAttributeCategoryList',data);
                    resolve()
                }).catch(err => {
                    reject(err)
                })

            })

        }
    }

}