import {getAttrbuteList,saveAttribute,getAttributeCategoryInfo,saveEditorAttributeCategory,deleteAttributeCategory} from '@/api/attribute'

export default {

    actions:{
        handelGetAttrbute({},data){
            return new Promise((resolve,reject) => {
                getAttrbuteList(data).then(res => {
                    const data = res.data;
                    resolve(data)
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
        handelSaveEditorAttributeCategory({},data){
            return new Promise((resolve,reject) => {
                saveEditorAttributeCategory(data).then(res => {
                    resolve()                    
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handelGetAttributeCategory({},data){
            return new Promise((resolve,reject) => {
                getAttributeCategoryInfo(data).then(res => {
                    const data = res.data;
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handelDeleteAttributeCategory({},data){
            return new Promise((resolve,reject) => {
                deleteAttributeCategory(data).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}