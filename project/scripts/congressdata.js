import memberInfo from "./congressinfo.js"
let menubtn = document.querySelector("#menubtn")
let navbar = document.querySelector(".navigation")
let senNum = document.querySelector("#senNum")
let repNum = document.querySelector("#repNum")
let logestSer = document.querySelector("#logestSer")
let shortestSer = document.querySelector("#shortestSer")
let avgSer = document.querySelector("#avgSer")
let memberRes = memberInfo()
let allMembers = memberRes.members

let totalYears = allMembers.reduce((total,curr)=>{
    let currentYear = new Date().getFullYear()
    let startYear = Number(curr.terms.item[0].startYear)
    let yearsServed = currentYear - startYear

    total += yearsServed
    return total
},0)

let yearsArray = allMembers.map((memeber)=>{
    let currentYear = new Date().getFullYear()
    let startYear = Number(memeber.terms.item[0].startYear)

    return currentYear - startYear
})

let numberOfReps = allMembers.map((member)=>{
    
    if(member.terms.item[0].chamber != "Senate"){
        return member.name
    }
})

toggleMenu()
menubtn.addEventListener("click",()=>{
    toggleMenu()
})

let averageServed = totalYears / allMembers.length
let longestServedVal = Math.max(...yearsArray)
let shortetServedVal = Math.min(...yearsArray)


senNum.textContent = 2
repNum.textContent = allMembers.length - 2
logestSer.textContent = `${longestServedVal} years`
shortestSer.textContent =`${shortetServedVal} years`
avgSer.textContent = `${averageServed.toFixed(1)} years`

console.log(allMembers)

function toggleMenu(){
    menubtn.classList.toggle("shut")
    navbar.classList.toggle("close")
}
