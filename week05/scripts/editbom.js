let addBtn = document.querySelector(".addBtn")
let inputField = document.querySelector("#favchap")
let listOfChapter = document.querySelector("#list")

let chaptersArray  = getChapterList() || []
// listOfChapter.appendChild(li)

addBtn.addEventListener("click",()=>{
    console.log("Here")
        if( inputField.value.trim() === ""){
        alert("Please Enter a Value")
        return 
    }
    let newInputValue = inputField.value.trim()
    displayList(newInputValue)
    chaptersArray.push(newInputValue)
    setChaperList()
    inputField.value = ""
    inputField.focus()


})

const setChaperList = () =>{
    localStorage.setItem("myFavBOMList",JSON.stringify(chaptersArray))
}

function getChapterList(){
    let returnvalue = localStorage.getItem("myFavBOMList")
    console.log(typeof(returnvalue))
    return JSON.parse(returnvalue)
}

const deleteChapter = (chapter) =>{
        chapter = chapter.slice(0,chapter.length -1 );
        chaptersArray = chaptersArray.filter((item) => item != chapter);
        setChaperList()
}

const displayList = (inputValue) =>{

    const newItem = document.createElement("li")
    const delBtn = document.createElement("button")

    newItem.innerText = inputValue  
    delBtn.textContent = "❌"    
    newItem.appendChild(delBtn)    
    listOfChapter.appendChild(newItem)

    delBtn.addEventListener("click",()=>{
        listOfChapter.removeChild(newItem)
        deleteChapter(newItem.textContent)
    })
}

chaptersArray.forEach((chapter)=>{
    displayList(chapter)
})

