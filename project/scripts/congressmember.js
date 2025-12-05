let menubtn = document.querySelector("#menubtn")
let navbar = document.querySelector(".navigation")
let congressName = document.querySelector("#name")
let party = document.querySelector("#party")
let chamber = document.querySelector("#chamber")
let startdate = document.querySelector("#startdate")
let largeCard = document.querySelector(".largeCard")
// let cardImage = document.querySelector(".largeCard img")
let member = getMemeber()


toggleMenu()
menubtn.addEventListener("click",()=>{
    toggleMenu()
})

let cardImage = document.createElement("img")

congressName.textContent = member.name
party.textContent = member.partyName
chamber.textContent = member.terms.item[0].chamber
startdate.textContent = member.terms.item[0].startYear
cardImage.setAttribute("src",member.depiction.imageUrl)
cardImage.setAttribute("alt",`Image of ${member.name}`)
console.log(cardImage)
largeCard.insertBefore(cardImage,largeCard.children[1])




function getMemeber(){
    let member = JSON.parse(localStorage.getItem("congressMember"))
    return member
}

function toggleMenu(){
    menubtn.classList.toggle("shut")
    navbar.classList.toggle("close")
}
