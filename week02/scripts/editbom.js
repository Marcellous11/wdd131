let addBtn = document.querySelector(".addBtn")
let inputField = document.querySelector("#favchap")
let listOfChapter = document.querySelector("#list")


// listOfChapter.appendChild(li)

addBtn.addEventListener("click",()=>{
    if( inputField.value.trim() === ""){
        alert("Please Enter a Value")
        return 
    }
    
    const newItem = document.createElement("li")
    const delBtn = document.createElement("button")

    newItem.innerText = inputField.value.trim()    
    delBtn.textContent = "❌"    
    newItem.appendChild(delBtn)    
    listOfChapter.appendChild(newItem)
    inputField.value = ""
    inputField.focus()
    delBtn.addEventListener("click",()=>{
        newItem.remove()
        inputField.focus()
    })

})

