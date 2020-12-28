import {MessageBox} from 'mint-ui'
export function messAlert(message='错误'){
    return MessageBox({
        title:'提示',
        message:message,
        showCancelButton: true
    })
}