import storage from "./storage.js";

if(storage.isConnected()){
    document.querySelector(".menu").innerHTML = `
            <ul>
                <li><a href="index.html">Les produits</a></li>
                <li><a href="#" id="signout">Déconnexion</a></li>
            </ul>`;
}

document.querySelector("#signout").addEventListener("click",function(){
    storage.remove();
    window.location.assign("login.html");
})
export default null;