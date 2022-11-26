/*==================== SHOW MENU ====================*/
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
    
//     // Validate that variables exist
//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             // We add the show-menu class to the div tag with the nav__menu class
//             nav.classList.toggle('show-menu')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')



function toggleMode(){
    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");        
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
}
function addSalad() {
    list.salad += 1
    console.log(list)
}
function addSpinach() {
    list.spinach += 1
    console.log(list)
}


function removeBbq() {
    if (list.bbq > 0) {
        list.bbq -= 1
        console.log(list)
    }
}
function removeSalad() {
    if (list.salad > 0) {
        list.salad -= 1
        console.log(list)
    }
}
function removeSpinach() {
    if (list.spinach > 0) {
        list.spinach -= 1
        console.log(list)
    }
}