import axios from '@/libs/api.request';

export const goodsAttrbuteLis = (data) => {

    return axios.request({
        url:'attribute/goodsAttribute',
        data,
        method:'post'
        
    })

}

export const gttributeGroup = () => {
    return axios.request({
        url:'attribute/gttributeGroup',
        method:'post'
     })

}