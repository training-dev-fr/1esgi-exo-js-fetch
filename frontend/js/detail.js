import storage from "./storage.js";
import global from "./global.js";

let params = new URL(document.location).searchParams;
let id = params.get("productId");

async function getProduct(id) {
    let result = await fetch(" http://localhost:3000/product/" + id);
    if (result.ok) {
        let product = await result.json();
        showProduct(product);
    }
}

function showProduct(product) {
    document.querySelector(".product .image img").src = product.image;
    document.querySelector(".product .name").innerHTML = product.name;
    document.querySelector(".product .description").innerHTML = product.description;
    document.querySelector(".product .price").innerHTML = product.price + " €";
}

document.querySelector("#add").addEventListener("click", function () {
    let data = {
        product: {
            quantity: Number.parseInt(document.querySelector("#quantity").value),
            id: Number.parseInt(id)
        }
    };
    addBasket(data);

});

async function addBasket(data) {
    let result = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + storage.get().jwt
        },
        body: JSON.stringify(data)
    });
    if (result.ok) {
        let data = await result.json();
        console.log(data);
    }
}

getProduct(id);