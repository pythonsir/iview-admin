import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

const token = getToken()

export const getCategory = (data) => {
  return axios.request({
    url: 'category/index',
    data,
    method: 'post'
  })
}
