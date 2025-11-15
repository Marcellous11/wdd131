const lastMod = document.getElementById("lastModified")
const today = new Date()
const currentYear = document.getElementById("currentYear")

lastMod.innerHTML = `Last Modified: ${document.lastModified}`
currentYear.innerHTML = today.getFullYear()

