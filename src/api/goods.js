import axios from '@/libs/api.request'


export const getCategoryList = (data) => {
    return axios.request({
      url: 'goods/getCategoryList',
      method: 'post'
    })
  }
  
export const getGoodsList = (data) => {
  return axios.request({
    url: "goods/index",
    data,
    method: 'post'
  })
}