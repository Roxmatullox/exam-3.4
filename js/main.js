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




// favourite

// let totalFavourite = document.querySelector(".favourite-total")

// let JSONfavourite = localStorage.getItem("favourite")

// let favourite = JSON.parse(JSONfavourite) || []

// function Favouritetotal() {
//   totalFavourite.innerHTML = favourite.length
// }

// Favouritetotal()


// category

let JSONcategory = localStorage.getItem("category")

let category = JSON.parse(JSONcategory) || []



