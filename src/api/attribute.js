import axios from '@/libs/api.request'

export const getAttrbuteList = (data)=> {
    return axios.request({
        url:'attribute/index',
        data,
        method:'post'
    })
}

export const saveAttribute = (data) => {
    return axios.request({
        url:'attribute/saveAttributeCategory',
        data,
        method:'post'
    })
}

export const getAttributeCategoryInfo = (data) => {
    return axios.request({
        url:'attribute/getAttributeCategoryInfo',
        data:{id:data},
        method:'post'
    })
}

export const deleteAttributeCategory = (data) => {
    return axios.request({
        url:'attribute/deleteAttributeCategory',
        data:{ids:data},
        method:'post'
    })
}

export const saveEditorAttributeCategory = (data) => {
    return axios.request({
        url:'attribute/saveEditorAttributeCategory',
        data,
        method:'post'
    })
}