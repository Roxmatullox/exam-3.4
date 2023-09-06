
// cards //

let freeProductsRow = document.querySelector(".free-cards")
let newProductsRow = document.querySelector(".new-cards")
let oldProductsRow = document.querySelector(".old-cards")

function card(el) {
let freeProductCard = document.createElement("div")

// img //

let freeCard = document.createElement("div")
freeCard.className = ("free-card-1")
freeProductCard.appendChild(freeCard)

let freeCardImgDiv = document.createElement("div")
freeCardImgDiv.className = ("free-card-1-img")
freeCard.appendChild(freeCardImgDiv)

let freeCardImgLink = document.createElement("a")
freeCardImgLink.href = "../pages/product.html"
freeCardImgDiv.appendChild(freeCardImgLink)

let freeCardImg = document.createElement("img")
freeCardImg.src = el.img,
freeCardImg.alt = el.name,
freeCardImgLink.appendChild(freeCardImg)


// text //

let freeCardText = document.createElement("div")
freeCardText.className = ("free-card-1-text")
freeCard.appendChild(freeCardText)

let freeCardPriceDiv = document.createElement("div")
freeCardPriceDiv.className = ("free-card-price")
freeCardText.appendChild(freeCardPriceDiv)

let freeCardPrice = document.createElement("div")
freeCardPriceDiv.appendChild(freeCardPrice)

let cardPrice = document.createElement("h4")
cardPrice.innerHTML = "44,50 ₽"
freeCardPrice.appendChild(cardPrice)


let aboutProduct = document.createElement("p")
aboutProduct.innerHTML = el.about
freeCardText.appendChild(aboutProduct)

let productStat = document.createElement("img")
productStat.src = "../images/stars.svg"
freeCardText.appendChild(productStat)

let productBtn = document.createElement("button")
productBtn.innerHTML = "В корзину"
freeCardText.appendChild(productBtn)

return freeProductCard

}

freeProduct.map((el)=>{
  let r = card(el)
  freeProductsRow.append(r)
})


newProduct.map((el)=>{
  let n = card(el)
  newProductsRow.append(n)
})


oldProduct.map((el)=>{
  let n = card(el)
  oldProductsRow.append(n)
})








// special //


let specialRow = document.querySelector(".special-content")


function specialCard(el) {
let specialCardDiv = document.createElement("div")
specialCardDiv.className = "special-card"


let specialCard = document.createElement("div")
specialCard.className = "special-left-card"
specialCardDiv.appendChild(specialCard)


let specialCardText = document.createElement("div")
specialCardText.className = "spec-right-text"
specialCard.appendChild(specialCardText)

let specialCardImg = document.createElement("img")
specialCardImg.src = el.img
specialCard.appendChild(specialCardImg)

let specialTitle = document.createElement("h4")
specialTitle.innerHTML = el.title
specialCardText.appendChild(specialTitle)

let specialAbout = document.createElement("p")
specialAbout.innerHTML = el.about
specialCardText.appendChild(specialAbout)

return specialCardDiv
}

special.map((el)=>{
  let r = specialCard(el)
  specialRow.appendChild(r)
})




// stats //


let statsRow = document.querySelector(".stat-cards")


function statCard(el) {

let statCardDiv = document.createElement("div")


let statCard = document.createElement("div")
statCard.className = "sats-card-1"
statCardDiv.appendChild(statCard)

let statCardImg = document.createElement("img")
statCardImg.src = el.img
statCard.append(statCardImg)

let statCardText = document.createElement("div")
statCardText.className = "sats-card-1-text"
statCard.append(statCardText)

let statCardDate = document.createElement("p")
statCardDate.innerHTML = el.date
statCardText.appendChild(statCardDate)

let statCardTitle = document.createElement("h5")
statCardTitle.innerHTML = el.title
statCardText.appendChild(statCardTitle)


let statCardAbout = document.createElement("p")
statCardAbout.innerHTML = el.about
statCardText.appendChild(statCardAbout)

let buttonDiv = document.createElement("div")
statCardText.appendChild(buttonDiv)

let specialBtn = document.createElement("button")
specialBtn.innerHTML = "Подробнее"
buttonDiv.appendChild(specialBtn)

return statCardDiv

}


stats.map((el)=>{
  let n = statCard(el)
  statsRow.appendChild(n)
})






let allProductsRow = document.querySelector(".all-product-cards")
let productsNumber = document.querySelector(".products-number")
let searchInput = document.querySelector(".search-input")
let pagination = document.querySelector(".all-products-pagination")

// onclick = "addToFavourite(${el.id}) <---like 
function allProducts(el) {
  return `
    <div>
      <div class="free-card-1"  onclick="addElementByCategory(${el.id})"> 
        <div class="free-card-1-img">
          <a href="pages/page.html" )>
            <img src="${el.images[0]}" alt="" />
          </a>
        </div>
        <div class="free-card-1-text">
          <div class="free-card-price">
            <div>
              <h4>${el.price} ₽</h4>
              <p>С картой</p>
            </div>
            <div>
              <h5>${el.name}</h5>
              <p>Обычная</p>
            </div>
          </div>
          <p>${el.description}</p>
          <img src="images/stars.svg" alt="" />
          <button onclick="addToCart(${el.id})" >В корзину</button>
        </div>
      </div>
    </div>
  `
}

let search = ""
let active = 1


function searchProducts() {
  let results = products.filter((el)=>el.name.toLocaleLowerCase().includes(search))

  let pages = Math.ceil(results.length/10)


  if (pages>1) {
    pagination.innerHTML = `<button onclick="activePage(${'+'})">
      Previous
    </button>`

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<button onclick="activePage(${i})" class = ${i===active ? "active" : ""} >
      ${i}
    </button>`
    }

    pagination.innerHTML += `<button onclick="activePage(${'-'})">
      Next
    </button>`
  } else {
    pagination.innerHTML = ""
  }

  let start = (active-1)*10
  let end = active*10

  let resultsPage = results.slice(start,end)
  
  allProductsRow.innerHTML = "";

  resultsPage.map((el)=>{ 
    allProductsRow.innerHTML += allProducts(el)
  })
  
  productsNumber.innerHTML = results.length
}

searchProducts()


searchInput.addEventListener("keyup" , function(){
  active = 1
  search = this.value.trim().toLowerCase()
  console.log(search);
  searchProducts()
})


function activePage(i) {
  if (i == '+') {
    active++
  } else if (i == '-') {
    active--
  } else {
    active = i;
  }

  searchProducts()
}








function addToCart(id) {
  let r = products.find((el)=>el.id === id)
  let check = cart.find((el)=>el.id === id)

  if (check) {
    r.quantity++
  } else {
    r.quantity = 1
    cart.push(r)
  }

  localStorage.setItem("cart" ,JSON.stringify(cart) )
  total()
}





// favourite

function addToFavourite(id) {
  let r = products.find((el)=>el.id === id)
  let check = favourite.find((el)=>el.id === id)
  
  if (check) {
   
  } else {
    favourite.push(r)
  }

  localStorage.setItem("favourite" ,JSON.stringify(favourite) )
  Favouritetotal()
}





// modal //
let modal = document.querySelector(".modal")
let openModal = document.querySelector(".modal-open")
let closeModal = document.querySelector(".close")


openModal.addEventListener("click" , function () {
  modal.classList.add("modal-opened")
})

closeModal.addEventListener("click" , function () {
  modal.classList.remove("modal-opened")
})





// category

function addElementByCategory(id) {
  category = []
  let r = ""
  products.map((el)=>{
    if (el.id == id) {
      r = el.category
    }

    if (el.category == r) {
      category.push(el)
    }
  })
  localStorage.setItem("category" ,JSON.stringify(category) )
}
