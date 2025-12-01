let menubtn = document.querySelector("#menubtn")
let navbar = document.querySelector(".navigation")
let congressName = document.querySelector("#name")
let party = document.querySelector("#party")
let chamber = document.querySelector("#chamber")
let startdate = document.querySelector("#startdate")
let largeCard = document.querySelector(".largeCard img")
let member = getMemeber()

toggleMenu()
menubtn.addEventListener("click",()=>{
    toggleMenu()
})

congressName.textContent = member.name
party.textContent = member.partyName
chamber.textContent = member.terms.item[0].chamber
startdate.textContent = member.terms.item[0].startYear
largeCard.setAttribute("src",member.depiction.imageUrl)




function getMemeber(){
    let member = JSON.parse(localStorage.getItem("congressMember"))
    return member
}

function toggleMenu(){
    menubtn.classList.toggle("shut")
    navbar.classList.toggle("close")
}
