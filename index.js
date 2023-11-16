const countEl = document.getElementById("count-el")
const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToLiter = 3.785
const kiloToPound = 2.204
const poundToKilo = 0.454

convertBtn.addEventListener("click", function(){
    let baseValue = countEl.value
    lengthEl.innerHTML = `${baseValue} Meters = <b>${baseValue * Math.round(meterToFeet*100)/100} Feet </b>| ${baseValue} Feet = <b>${baseValue * Math.round(feetToMeter*100)/100} Meters</b>`
    volumeEl.innerHTML = `${baseValue} Liters = <b>${baseValue * Math.round(literToGallon*100)/100} Gallons </b> | ${baseValue} Gallons = <b>${baseValue * Math.round(gallonToLiter*100/100)} Liters</b>`
    massEl.innerHTML = `${baseValue} Kilo = <b>${baseValue * Math.round(kiloToPound*100)/100} Pound </b>| ${baseValue} Pound = <b>${baseValue * Math.round(poundToKilo*100)/100} Kilo</b>`
})


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

