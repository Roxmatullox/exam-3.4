let headerBtn = document.querySelector(".header-left-btn")
let Catelog = document.querySelector(".catalog")

headerBtn.addEventListener("click",  () => {
  Catelog.classList.toggle("catalog-2")
})


// cart


let totalProducts = document.querySelector(".productas-total")

let JSONcart = localStorage.getItem("cart")

let cart = JSON.parse(JSONcart) || []

function total() {
  totalProducts.innerHTML = cart.length
}

total()