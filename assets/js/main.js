function toggleMode(){
    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.querySelector('#toggle-mode').innerText = 'Dark Mode'
    } else {
        document.body.classList.add("dark-theme");    
        document.querySelector('#toggle-mode').innerText = 'Light Mode'
    }

  }

let list = {
    bbq: 0,
    salad: 0,
    spinach: 0
}


function addBbq() {
    list.bbq += 1
    console.log(list)
    const menuBbq = document.querySelector('#menu-bbq')
    menuBbq.innerText = `${list.bbq} Barbeque Salad ($22.00)`
    menuBbq.classList.remove("hide-item");
    const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
    const cartPrice = document.querySelector('#cart-price')
    cartPrice.innerText = `Total: ${price.toFixed(2)}`
}
function addSalad() {
    list.salad += 1
    console.log(list)
    const menuSalad = document.querySelector('#menu-salad')
    menuSalad.innerText = `${list.salad} Salad with fish ($12.00)`
    menuSalad.classList.remove("hide-item");
    const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
    const cartPrice = document.querySelector('#cart-price')
    cartPrice.innerText = `Total: ${price.toFixed(2)}`
}
function addSpinach() {
    list.spinach += 1
    console.log(list)
    const menuSpinach = document.querySelector('#menu-spinach')
    menuSpinach.innerText = `${list.spinach} Spinach salad ($9.50)`
    menuSpinach.classList.remove("hide-item");
    const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
    const cartPrice = document.querySelector('#cart-price')
    cartPrice.innerText = `Total: ${price.toFixed(2)}`
}

function removeBbq() {
    if (list.bbq > 0) {
        list.bbq -= 1
        console.log(list)
        const menuBbq = document.querySelector('#menu-bbq')
        if (list.bbq === 0) {
            menuBbq.innerText = ''
            menuBbq.classList.add("hide-item");
        } else {
            menuBbq.innerText = `${list.bbq} Barbeque Salad ($22.00)`
        }
        const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
        const cartPrice = document.querySelector('#cart-price')
        cartPrice.innerText = `Total: ${price.toFixed(2)}`
        if (price === 0) {
            cartPrice.innerText = 'Your cart is empty.'
        }
    }
}
function removeSalad() {
    if (list.salad > 0) {
        list.salad -= 1
        console.log(list)
        const menuSalad = document.querySelector('#menu-salad')
        if (list.salad === 0) {
            menuSalad.classList.add("hide-item");
        } else {
            menuSalad.innerText = `${list.salad} Salad with fish ($12.00)`
        }
        const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
        const cartPrice = document.querySelector('#cart-price')
        cartPrice.innerText = `Total: ${price.toFixed(2)}`
        if (price === 0) {
            cartPrice.innerText = 'Your cart is empty.'
        }
    }
}
function removeSpinach() {
    if (list.spinach > 0) {
        list.spinach -= 1
        console.log(list)
        const menuSpinach = document.querySelector('#menu-spinach')
        if (list.spinach === 0) {
            menuSpinach.classList.add("hide-item");
        } else {
        menuSpinach.innerText = `${list.spinach} Spinach salad ($9.50)`
        }
        const price = list.bbq*22 + list.salad*12 + list.spinach*9.5
        const cartPrice = document.querySelector('#cart-price')
        cartPrice.innerText = `Total: ${price.toFixed(2)}`
        if (price === 0) {
            cartPrice.innerText = 'Your cart is empty.'
        }
    }
}

function showCart() {
    document.querySelector('#cart').classList.remove('hide-item')
}

function hideCart() {
    document.querySelector('#cart').classList.add('hide-item')
}

function clearCart() {
    const menuBbq = document.querySelector('#menu-bbq')
    const menuSalad = document.querySelector('#menu-salad')
    const menuSpinach = document.querySelector('#menu-spinach')
    menuBbq.classList.add("hide-item");
    menuSalad.classList.add("hide-item");
    menuSpinach.classList.add("hide-item");
    list.bbq = 0
    list.salad = 0
    list.spinach = 0
    console.log(list)
    const cartPrice = document.querySelector('#cart-price')
    cartPrice.innerText = 'Your cart is empty.'
}