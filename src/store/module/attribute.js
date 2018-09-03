import {getAttrbuteList} from '@/api/attribute'

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


        }

        
    }

}