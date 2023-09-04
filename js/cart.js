let cartRow = document.querySelector(".cart-container")


function cartCards(el) {
  return `
            <div class="cart-card">
              <div class="cart-card-left">
                <div class="cart-card-img">
                  <img src="${el.images[0]}" alt="">
                </div>
                <div class="cart-card-text">
                  <h4>${el.name}</h4>
                  <h6>${el.price} ₽ <span>за шт.</span></h6>
                </div>
              </div>
              <div class="cart-card-right">
                <div class="cart-card-buttons">
                  <button onclick=minus(${el.id}) >-</button>
                  <button>${el.quantity}</button>
                  <button onclick=plus(${el.id}) >+</button>
                </div>
                <div class="cart-card-price">
                  <h3>${el.price} ₽ </h3>
                </div>
              </div>
            </div>
  `

}




function getCartCards() {
  cartRow.innerHTML = ""
  cart.map((el)=>{
    let r = cartCards(el)
    cartRow.innerHTML += r
   })
}

getCartCards()


function minus(id) {
  let product = cart.find((el)=> el.id === id )

  if (product.quantity === 1) {
    let isDelete = confirm("Bu productni ochirishni xohlaysizmi?")

    if (isDelete) {
      cart = cart.filter((el)=> el.id !== id)
    }
  } else {
    cart = cart.map((el)=>{
      if (el.id == id) {
        el.quantity--
      }
      return el
    })
  }

  localStorage.setItem("cart" , JSON.stringify(cart))
  getCartCards()
}

function plus(id) {
  cart = cart.map((el)=>{
    if (el.id == id) {
      el.quantity++
    }
    return el
  })

  localStorage.setItem("cart" , JSON.stringify(cart))
  getCartCards()
}