
let counterElement = document.querySelector("#subcounter")
const thankYouPage = document.querySelector("#thankyou")

let count = getCount() || 0

counterElement.textContent = count

setCount()
function setCount(){
    count++
    localStorage.setItem("count",count)
}

function getCount(){
    let count = localStorage.getItem("count")
    return count
}
