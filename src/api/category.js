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

export const getTopCategory = () => {

  return axios.request({
    url: 'category/topCategory',
    method: 'post'
  })
}

export const saveCategory = (data) => {
  return axios.request({
    url: 'category/saveCategory',
    data,
    method: 'post'
  })

}

export const deleteData = (data) => {

  return axios.request({
    url:'category/deleteCategory',
    data:{"ids":data},
    method: 'post'
  })

}

export const getCategoryInfo = (data) => {

  return axios.request({
    url:'category/info',
    data:{"id":data},
    method: 'post'
  })

}

export const saveEditorCategory = (data) => {

  return axios.request({
    url:'category/saveEditorCategory',
    data,
    method: 'post'
  })


}