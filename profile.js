console.log("script is working")

function colorAlert(){
    alert("Blue is my favorite color")
}
function placeAlert(){
    alert("My favorite place is right here in my bedroom")
}
function ritualAlert(){
    alert("Human sacrifice. JK. I don't have a favorite ritual.")
}

document.querySelector("#color").addEventListener('click', colorAlert)
document.querySelector("#place").addEventListener('click', placeAlert)
document.querySelector("#ritual").addEventListener('click', ritualAlert)