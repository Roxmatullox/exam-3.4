
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




// kotelog //

let headerBtn = document.querySelector(".header-left-btn")
let Catelog = document.querySelector(".catalog")

headerBtn.addEventListener("click",  () => {
  Catelog.classList.toggle("catalog-2")
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