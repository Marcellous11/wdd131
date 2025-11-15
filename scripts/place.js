const areaElement = document.querySelector("#area")
const populationElement = document.querySelector("#population")
const capitalElement = document.querySelector("#capital")
const langElement = document.querySelector("#lang")
const currencyElement = document.querySelector("#currency")
const timezoneElement = document.querySelector("#timezone")
const calddngcodeElement = document.querySelector("#calddngcode")
const internettldElement = document.querySelector("#internettld")
const tempElement = document.querySelector("#temp")
const conditionsElement = document.querySelector("#conditions")
const windElement = document.querySelector("#wind")
const windchillElement = document.querySelector("#windchill")


let areaValue = "3,796,742"
let populationValue = "342,034,432"
let capitalValue= "Washington, D.C."
let langValue= "English"
let currencyValue = "United States dollar (USD)"
let timezoneValue = "UTC−5 to UTC−8"
let calddngcodeValue= "+1"
let internettldValue= ".us"
let tempValue= 30
let conditionsValue = "Sunny"
let windValue= 5


const calculateWindChill = (temp,windSpeed) =>{
    if(temp <= 50 && windSpeed > 3 ){
        return 35.74 + (0.6515 * temp) - (35.75 * windSpeed**0.16) + (0.4275 * temp * windSpeed**0.16) 
    } 
}

let windchillValue =  calculateWindChill(tempValue,windValue)
windchillValue = windchillValue.toFixed(2)

areaElement.textContent = `${areaValue} sq mil`
populationElement.textContent = populationValue
capitalElement.textContent = capitalValue
langElement.textContent =langValue
currencyElement.textContent = currencyValue
timezoneElement.textContent = timezoneValue
calddngcodeElement.textContent = calddngcodeValue
internettldElement.textContent = internettldValue
tempElement.textContent = tempValue
conditionsElement.textContent = conditionsValue
windElement.textContent = windValue
windchillElement.textContent = `${windchillValue} °F`



