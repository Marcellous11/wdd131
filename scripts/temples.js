const nav = document.querySelector("ul")
const menuBtn = document.querySelector("button")

menuBtn.addEventListener("click",()=>{
    nav.classList.toggle("open")
    menuBtn.classList.toggle("open")
})