function save(user){
    localStorage.setItem("user",JSON.stringify(user));
}

function get(){
    return JSON.parse(localStorage.getItem("user")).jwt;
}

function remove(){
    localStorage.removeItem("user");
}

function isConnected(){
    return localStorage.getItem("user") != null;
}

export default {save, get, isConnected, remove};