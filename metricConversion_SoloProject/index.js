let res = document.getElementById("result")

let met = document.getElementById("meter")
let fet = document.getElementById("feet")
let vol = document.getElementById("liters")
let gal = document.getElementById("gallons")
let mass = document.getElementById("kilograms")
let poun = document.getElementById("pounds")

let digit = 10

res.innerText = digit

//meters to feet
let len_meter = digit * 3.28084

met.innerText = digit + " meters " + "= " + len_meter + " Feet"

//feet to meters
let len_feet = digit * 0.3048
fet.innerText = digit + " feets " + "= " + len_feet + " meters"

//liters to gallon
let lliters = digit * 0.264172
vol.innerText = digit + " liters " + "= " + lliters + " gallons"

//gallons to litters
let galons = digit * 3.78541
gal.innerText = digit + " gallons " + "= " + galons + " Liters"

//killograms to pounds
let killo = digit * 2.20462
mass.innerText = digit + " kg " + "= " + killo + " Pounds"

//pounds to killogram
let pound = digit * 0.453592
poun.innerText = digit + " Pounds" + "= " + pound + " Kg"

