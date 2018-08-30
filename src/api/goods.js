import axios from '@/libs/api.request'


export const getCategoryList = (data) => {
    return axios.request({
      url: 'goods/getCategoryList',
      method: 'post'
    })
  }
  