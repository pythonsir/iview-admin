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

export const saveAttribute = (data) => {
    return axios.request({
        url:'attribute/saveAttribute',
        data,
        method:'post'
    })
}

export const deleteAttribute = (data) => {
    return axios.request({
        url:'attribute/deleteAttribute',
        data:{"ids":data},
        method: 'post'
    })

}

export const getAttributeInfo = (data) => {
    return axios.request({
        url:'attribute/getAttributeInfo',
        data,
        method: 'post'
    })
}

export const saveEditoryAttributeInfo = (data) => {
    return axios.request({
        url:'attribute/saveEditoryAttributeInfo',
        data,
        method: 'post'
    })
}