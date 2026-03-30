let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let loginForm = document.querySelector(".loginForm");
form.addEventListener("submit",function(k){
    k.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);
    profile.classList.add("profile");
    profile.appendChild(img);
    card.appendChild(profile);
    let h3 =document.createElement("h3");
    h3.innerText = inputs[1].value;
    card.appendChild(h3);
    let h5 = document.createElement("h5");
    h5.innerText = inputs[2].value;
    card.appendChild(h5);
    let p = document.createElement("p");
    p.textContent = inputs[3].value;
    card.appendChild(p);
    loginForm.appendChild(card);
    inputs.forEach(function(val){
        if(val.type !== "submit"){
            val.value = "";
        }
    });


})