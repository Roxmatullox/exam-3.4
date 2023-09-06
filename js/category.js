let categoryRow = document.querySelector(".category-container")

function categoryProducts(el) {
  return `
    <div>
      <div class="free-card-1"> 
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


category.map((el)=>{
  let r = categoryProducts(el)
  categoryRow.innerHTML += r
})