export function getToken(){
    return JSON.parse(localStorage.getItem('token'));
}
export function addToken(data){
    return localStorage.setItem('token',JSON.stringify(data));
}
export function getName(){
    return JSON.parse(localStorage.getItem('name'));
}
export function addName(data){
    return localStorage.setItem('name',JSON.stringify(data));
}