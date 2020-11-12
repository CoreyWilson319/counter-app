const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
// const display = document.getElementById("display")
display.innerText = 0
display.value = 0
// const input = parseInt(document.getElementById("input").value)
// const displayValue = parseInt(document.getElementById("display").innerText)

plusButton.addEventListener("click", function(){
    let input = parseInt(document.getElementById("input").value)
    let displayValue = parseInt(document.getElementById("display").innerText)
    let display = document.getElementById("display")
    let results = displayValue + input;
    display.innerText = results
    console.log("plus clicked")
})

minusButton.addEventListener("click", function(){
    let input = parseInt(document.getElementById("input").value)
    let displayValue = parseInt(document.getElementById("display").innerText)
    let display = document.getElementById("display")
    let results = displayValue - input;
    display.innerText = results
    console.log("plus clicked")
})
