import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    'username': userName,
    'password': password
  }
  return axios.request({
    url: 'auth/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'auth/getUserinfo',
    // params: {
    //   token
    // },
    method: 'post'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
