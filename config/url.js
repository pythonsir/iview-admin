import env from './env'

// const DEV_URL = 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/'
const DEV_URL = 'http://127.0.0.1:8360/admin/'
const PRO_URL = 'https://produce.com'

export default env === 'development' ? DEV_URL : PRO_URL
