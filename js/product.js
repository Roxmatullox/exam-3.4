let allImages = document.querySelector(".left-all-products")
let leftImage = document.querySelector(".left-product img")


allImages.addEventListener("click" , (e)=>{
  leftImage.src = e.target.src
})