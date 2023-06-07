// show the cart 
let cartIcon = document.querySelector(".cart");
let cartCard = document.getElementById("cartCard");

cartIcon.addEventListener("click", () =>{
    cartCard.classList.toggle("hidden");
})
//show product
let emptyCart = document.querySelector(".emptyCart");
let cartProduct = document.querySelector(".cartProduct");

// show images
let smallImages = document.querySelectorAll(".smallImage img");
let bigImage = document.querySelector(".bigImage img");
smallImages.forEach((image) => {
    image.addEventListener('click', () => {
        smallImages.forEach((img) => img.classList.remove('active'));
        image.classList.add('active');
        bigImage.src = image.src;
    });
});

// start change image in small devices 
let nextImg = document.querySelector(".next");
let prevImg = document.querySelector(".prev");
let count = 1;
// next image
nextImg.addEventListener('click', () => {
    (count < 4 ) ? count++ :(count = 1)
    bigImage.src = `images/image-product-${count}.jpg`
})
// prev image 
prevImg.addEventListener('click', () => {
    (count === 1 ) ? (count = 4) : count--;
    bigImage.src = `images/image-product-${count}.jpg`
})

// quantity
let quantity = document.querySelector(".number");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let currentNumber = parseInt(quantity.innerText);
add.addEventListener('click', () => {
    currentNumber+=1;
    quantity.innerText = currentNumber;
})
sub.addEventListener('click', () => {
    if (currentNumber !== 0) {
        currentNumber-=1;
    }
    quantity.innerText = currentNumber;
})
let cartNumber = document.querySelector(".cartNumber");
if (cartNumber.innerHTML == 0) {
    cartNumber.style.display = "none";
}

let addCart = document.querySelector(".addCart");
// add cart dont work when the value is 0
if (cartNumber.innerHTML !== 0) {
addCart.addEventListener('click', ()=>{
    let cartQuantaty= document.querySelector(".cartQuantaty span");
    cartNumber.style.display = "flex";
    cartNumber.innerText = quantity.innerText;
    cartQuantaty.innerText = quantity.innerText;
    let cartPrice= document.querySelector(".cartPrice span");
    let total = document.querySelector(".total");
    let result = Number(cartPrice.textContent) * Number(quantity.textContent)
    total.innerText = `$${result}`
    console.log(result)
    emptyCart.classList.add("hidden");
    cartProduct.classList.remove("hidden");
})}
//delete btn
let deleteProduct = document.getElementById("delete");

deleteProduct.addEventListener('click', () => {
    emptyCart.classList.remove("hidden");
    cartProduct.classList.add("hidden");
})
// start menu 
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close");
let list = document.querySelector(".list");
// open menu 
menu.addEventListener('click', () => {
    list.classList.add("active");
    closeMenu.classList.remove("hidden");
})
// close menu 
closeMenu.addEventListener('click', () => {
    list.classList.remove("active");
    closeMenu.classList.add("hidden");
})
// end menu 
