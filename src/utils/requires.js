import axios from 'axios'
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
})
service.interceptors.request.use(
    config =>{
        Indicator.open();
        return config;
    },
    err =>{
        Indicator.close();
        MessageBox({
            title:'提示',
            message: err.message,
            showCancelButton: true
        })
        return Promise.reject(err);
    }
)
service.interceptors.response.use(
    data =>{
        Indicator.close();
        return data;
    },
    err=>{
        Indicator.close();
        MessageBox({
            title:'提示',
            message: err.message,
            showCancelButton: true
        })
        return Promise.reject(err)
    }
)
export default service