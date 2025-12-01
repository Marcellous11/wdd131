import memberInfo from "./congressinfo.js"
let menubtn = document.querySelector("#menubtn")
let navbar = document.querySelector(".navigation")
const senContainer = document.querySelector("#senatorsection")
const repContainer = document.querySelector("#houseofrepsection")
const filterForm = document.querySelector("form")
let memberRes = memberInfo()
let allMembers = memberRes.members


toggleMenu()
setCards("all")
menubtn.addEventListener("click",()=>{
    toggleMenu()
})

filterForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = new FormData(filterForm)
    let val =  Object.fromEntries(obj.entries())

    console.log(val.party)

    setCards(val.party)
})


function setCards(party){
    senContainer.innerHTML = ""
    repContainer.innerHTML = ""

    
    let filteredMembers = allMembers.filter((member)=>{
        return member.partyName == party
     }) 

    filteredMembers = filteredMembers.length ? filteredMembers : allMembers

    filteredMembers.forEach((member)=>{
        let name = member.name
        let partyName = member.partyName
        let imgUrl = member.depiction.imageUrl
        let card = generateTemplate(name,partyName,imgUrl,member)
        
        if (member.terms.item[0].chamber == "Senate"){

            senContainer.appendChild(card)
        }else{
            repContainer.appendChild(card)
        }


})

}



function toggleMenu(){
    menubtn.classList.toggle("shut")
    navbar.classList.toggle("close")
}


function generateTemplate(name,party,imgUrl,member){
    let card = document.createElement("div")
    let linkElement = document.createElement("a")
    let imgElement = document.createElement("img")
    let congressLabel = document.createElement("h4")

    imgElement.setAttribute("src",imgUrl)
    imgElement.setAttribute("loading","lazy")
    imgElement.setAttribute("alt",`Image of ${name}`)

    congressLabel.innerText = `${name} (${party})`

    linkElement.setAttribute("href","congressmember.html")
    linkElement.appendChild(imgElement)
    linkElement.appendChild(congressLabel)

    card.appendChild(linkElement)
    card.classList.add("card")

    linkElement.addEventListener("click", (e)=>{
        e.preventDefault()

        // SET LOCAL HOST
        let congressData = JSON.stringify(member)
        localStorage.setItem("congressMember",congressData)

        window.location.href = "congressmember.html"
    })

    return card
}
