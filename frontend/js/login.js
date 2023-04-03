import storage from "./storage.js";
import global from "./global.js";

document.querySelector('.form input[type="submit"]').addEventListener("click", function (e) {
    e.preventDefault();
    let data = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };
});

async function signin(user) {
    let result = await fetch(" http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (result.ok) {
        let user = result.json();
        storage.save(user);
        window.location.assign("index.html");
    }
}