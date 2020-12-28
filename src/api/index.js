import request from '@/utils/requires'
import qs from 'qs'
export function getLunBo(data){//轮播
    return request({
        url:'api/rotationChart/getList',
        method:'post',
    })
}
export function insertReservation(data){//预约
    return request({
        url:'api/reservation/insertReservation',
        method:'post',
        data:data,
    })
}
export function invoiceAppLication(data){//发票申请
    return request({
        url:'api/invoice/insertInvoiceApplication',
        method:'post',
        data:data,
    })
}
export function historyList(data){//发票申请列表
    return request({
        url:'/api/invoice/invoiceGetList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function singleDetails(data){//发票申请详情
    return request({
        url:'/api/invoice/singleDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function editUploadst(data){//上传图片
    return request({
        url:'common/editUploadst',
        method:'post',
        data:data,
    })
}
export function getList(data){ //获取列表
    return request({
        url:'api/detailsContent/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function getSupplierRepresentativeList(data){
    return request({
        url:'api/supplierRepresentative/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function getPurchasingPartnerList(data){
    return request({
        url:'api/purchasingPartner/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function getSingleDetails(data){//根据轮播获取内容详情
    return request({
        url:'/api/detailsContent/getSingleDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function getSupplierRepresentativeDetails(data){
    return request({
        url:'api/supplierRepresentative/getSingleDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function getPurchasingPartnerDetails(data){
    return request({
        url:'api/purchasingPartner/getSingleDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function insertInformation(data){//财务手续工程管理
    return request({
        url:'api/financial/insertInformation',
        method:'post',
        data:data,
    })
}
export function insertCooperation(data){//项目合作
    return request({
        url:'api/cooperation/insertCooperation',
        method:'post',
        data:data,
    })
}
export function buttonJump(data){//获取跳转的图文
    return request({
        url:'api/buttonJump/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function imageText(data){//获取图文的直接url
    return request({
        url:'api/imageText/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function performanceDisplay(data){//获取列表5大象
    return request({
        url:'api/performanceDisplay/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function performanceDisplayGetSingleDetails(data){//获取列表的详情
    return request({
        url:'api/performanceDisplay/getSingleDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function starQuestionnaire(){
    return request({
        url:'api/starQuestionnaire/getList',
        method:'post',
    })
}
export function textManagement(data){ //办公流程列表和制度规范
    return request({
        url:'/api/textManagement/getList',
        method:'post',
        data:qs.stringify(data),
    })
}
export function textManagementDetails(data){ //办公流程列表和制度规范
    return request({
        url:'/api/textManagement/getDetails',
        method:'post',
        data:qs.stringify(data),
    })
}
export function detailsContentGetListed(data){ //内部公告的列表
    return request({
        url:'/api/detailsContent/getListed',
        method:'post',
        data:qs.stringify(data),
    })
}
export function detailsContentGetSingleDetailsThree(data){ //内部公告的详情
    return request({
        url:'/api/detailsContent/getSingleDetailsThree',
        method:'post',
        data:qs.stringify(data),
    })
}