import request from '@/utils/requires'
import qs from 'qs'
export function register(data){
    return request({
        url:'api/users/register',
        method:'post',
        data,
    })
}
export function login(data){
    return request({
        url:'api/users/login',
        method:'post',
        data:qs.stringify(data),
    })
}
export function loginCode(data){
    return request({
        url:'api/users/loginByMobile',
        method:'post',
        data:qs.stringify(data),
    })
}
export function code(data){
    return request({
        url:'api/users/sendIdentifyingCode',
        method:'post',
        data:qs.stringify(data),
    })
}
export function setPwd(data){
    return request({
        url:'api/users/setPwd',
        method:'post',
        data:qs.stringify(data),
    })
}
export function verification(data){
    return request({
        url:'api/users/verification',
        method:'post',
        data:qs.stringify(data),
    })
}