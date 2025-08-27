//funtionality for heart btn clicked
const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
let count = 0
for (const button of heartButtons) {
    button.addEventListener("click", function () {
        count++
        heartCount.innerText = count
    });
}

//funtionality for call btn clicked
const callBtns = document.getElementsByClassName("call-btn");
const coinCount = document.getElementById("coin-count");

let coins = 100;
for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const card = this.parentElement.parentElement
        const serviceNames = card.getElementsByClassName("service-name");
        const serviceNumbers = card.getElementsByClassName("service-number");
        for (const service of serviceNames) {
            for (const number of serviceNumbers) {
                if (coins >= 20) {
                    coins -= 20
                    coinCount.innerText = coins
                    alert(`Calling ${service.innerText} ${number.innerText}... `);


                    const data = {
                        name: service.innerText,
                        number: number.innerText,
                        date: new Date().toLocaleTimeString()
                    }

                    history.push(data)
                    
                    const historyContainer = document.getElementById("history-container")
                    historyContainer.innerText = ""
                    const clearBtn = document.getElementById("clear-btn").addEventListener('click', function () {
                            historyContainer.innerText = ""
                        })
                    for (const data of history) {
                        const div = document.createElement("div")
                        div.innerHTML = `
                        <div class=" flex justify-between items-center mb-4">                            
                                <div class="ml-3">
                                    <h1 class="font-semibold">${data.name}</h1>
                                    <h2>${data.number}</h2>
                                </div>
                                <p class="mr-3">${data.date}</p>                            
                            </div>
                        `
                        historyContainer.appendChild(div)                        
                    }
                }
                else {
                    alert("Insufficient coins for calling...")
                }
            }
        }
    })
}

//funtionality for copy btn clicked
const copyBtns = document.getElementsByClassName("copy-btn");
const copyCount = document.getElementById("copy-count");
let counts = 0
for (const button of copyBtns) {
    button.addEventListener('click', function () {
        counts++
        copyCount.innerText = counts

        const card = this.parentElement.parentElement;
        const serviceNumbers = card.getElementsByClassName("service-number")
        for (const number of serviceNumbers) {
            navigator.clipboard.writeText(number.innerText)
            alert("Phone number copied")
        }

    })
}

// history section
const history = [];
