import global from "./global.js";

async function getProducts(){
    let result = await fetch(" http://localhost:3000/product");
    if(result.ok){
        let productList = await result.json();
        showProducts(productList);
    }
}

function showProducts(productList){
    let productDOM = "";
        for(let product of productList){
            productDOM += `
            <a class="product" href="detail.html?productId=${product.id}">
                <div class="name">
                    ${product.name}
                </div>
                <div class="image">
                    <img src="${product.image}">
                </div>

                <div class="description">
                    ${product.description}
                </div>
                <div class="price">
                    ${product.price}
                </div>
            </a>`;
        }
        document.querySelector("#products").innerHTML = productDOM;
}
getProducts();