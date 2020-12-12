//=============Submission form elements==========================
const head = document.querySelector('header')
const formContainer = document.querySelector('.form-container')
const form = document.querySelector('.form');
const subPar = document.querySelector('.sub-intro')
const closeBtn = document.getElementById('close-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
//============Main elements======================================
const main = document.querySelector('main')
const cart = document.createElement('div')
//============Globals Variables==================================
const emailList = []
let cartCount = 0


function toggler() {
    form.classList.toggle("hide");
    const closeBtnText = closeBtn.innerText
    if (closeBtnText === 'X') {
        closeBtn.innerText = '+'
        head.style.paddingBottom = '0';
        subPar.style.marginBottom = '10px';
    } else {
        closeBtn.innerText = 'X'
        head.style.paddingBottom = '50px';
        subPar.style.marginBottom = '35px';
    }
}

function validateForm() {
    if (!nameInput.value && !emailInput.value) {
        nameInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
        alert("Please Enter valid name and email to subscribe!")
    } else if (!nameInput.value && emailInput.value) {
        nameInput.style.border = "2px solid red";
        alert("Please Enter valid name to subscribe!")
    } else if (nameInput.value && !emailInput.value) {
        emailInput.style.border = "2px solid red";
        alert("Please Enter valid email to subscribe!")
    } else {
        emailList.push({ name: nameInput.value, email: emailInput.value })
        displayThankYou()
    }
}

function displayThankYou() {
    subPar.innerText = 'Thank you for subscribing to our email list!';
    toggler()
    closeBtn.style.display = 'none';
    setTimeout(function () { formContainer.style.display = 'none' }, 5000);
}

function cartUpdate() {
    if (cartCount === 0) {
        cartCount++;
        cart.setAttribute('class', 'cart-display');
        cart.innerText = `Your cart: ${cartCount} item`
        main.appendChild(cart)
    }
    else {
        cartCount++;
        cart.innerText = `Your cart: ${cartCount} items`
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm()
})

nameInput.addEventListener('change', function (e) {
    nameInput.style.border = 'none';
})

emailInput.addEventListener('change', function (e) {
    emailInput.style.border = 'none';
})

