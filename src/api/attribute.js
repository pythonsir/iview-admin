import axios from '@/libs/api.request'

export const getAttrbuteList = (data)=> {

    return axios.request({
        url:'attribute/index',
        data,
        method:'post'
    })


}