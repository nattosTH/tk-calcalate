

let calBtn = document.getElementById("calulateBtn")
let clearBtn = document.getElementById("clearBtn")
let inputcombinedRate = document.getElementById("combinedRate")
let inputTranspotRate = document.getElementById("transpotRate")
let inputCombinedQTY = document.getElementById("combinedQTY")
let inputTranspotQTY = document.getElementById("transpotQTY")
let chkBoxIsSanphong = document.getElementById("isSanphong")
let spanCombinedAmount = document.getElementById("spanCombinedAmount")
let spanTranspotAmount = document.getElementById("spanTranspotAmount")
let spanTotalAmount = document.getElementById("spanTotalAmount")


clearAll = () => {
    inputCombinedQTY.value = ""
    inputTranspotQTY.value = ""
    chkBoxIsSanphong.checked = false
    spanCombinedAmount.innerText = ""
    spanTranspotAmount.innerText = ""
    spanTotalAmount.innerText = ""
}

calculate = () => {
    if (inputCombinedQTY.value== "" || inputTranspotQTY== "" ){
        return
    }
    // console.log(chkBoxIsSanphong.checked)
    if (chkBoxIsSanphong.checked) {
        inputTranspotRate.value = 0.1
    }
    const combinedAmount = (parseFloat(inputCombinedQTY.value) * parseFloat(inputcombinedRate.value))
    const transpotAmount = (parseFloat(inputTranspotQTY.value) * parseFloat(inputTranspotRate.value))
    const totalAmount = combinedAmount + transpotAmount
    
    spanCombinedAmount.innerText = combinedAmount.toFixed(2)
    spanTranspotAmount.innerText =transpotAmount.toFixed(2)
    spanTotalAmount.innerText = totalAmount.toFixed(2)
    
}
calBtn.addEventListener("click", calculate)
clearBtn.addEventListener("click", clearAll)
chkBoxIsSanphong.addEventListener("change", event => {
    if (event.currentTarget.checked) {
        inputTranspotRate.value = 0.1
    } else {
        inputTranspotRate.value = 0.2
    }
})


