import {goodsAttrbuteLis,gttributeGroup,saveAttribute,deleteAttribute,getAttributeInfo,saveEditoryAttributeInfo} from '@/api/goods-attribute'

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
        },
        handelSaveAttribute({},data){
            return new Promise((resolve,reject) => {
                saveAttribute(data).then(res => {
                    const data = res.data;
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handelDeleteAttribute({},data){
            return new Promise((resolve,reject) => {
                deleteAttribute(data).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handelGetAttributeInfo({},data){
            return new Promise((resolve,reject) => {
                getAttributeInfo(data).then(res => {
                    const data = res.data
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handelSaveEditoryAttributeInfo({},data){
            return new Promise((resolve,reject) => {
                saveEditoryAttributeInfo(data).then(res => {
                    const data = res.data
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }

}