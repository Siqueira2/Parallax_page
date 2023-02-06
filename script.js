const menu = document.getElementById("menu")
const hamburguer = document.getElementById("hamburguer-menu")
const stars = document.getElementById("stars")
const moon = document.getElementById("moon")
const front = document.getElementById("mountains-front")
const behind = document.getElementById("mountains-behind")
const btn = document.getElementById("button")
const txt = document.getElementById("headline")


hamburguer.addEventListener("click", () => { //Active menu responsive
    hamburguer.classList.toggle("active")
    menu.classList.toggle("active")
})

window.addEventListener("scroll", () => { //
    let value = window.scrollY
    stars.style.left = value * .3 + "px"
    moon.style.top = value * 1 + "px"
    front.style.top = value * .18 + "px"
    behind.style.top = value * 0 + "px"
    btn.style.marginTop = value * 4 + "px"
    txt.style.marginTop = value * 1.45 + "px"
})