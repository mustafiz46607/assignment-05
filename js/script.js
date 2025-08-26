//funtionality for heart btn clicked
const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
let count = 0
for (const button of heartButtons) {
  button.addEventListener("click", function() {
      count ++
      heartCount.innerText = count
  });
}

//funtionality for call btn clicked
const callBtns = document.getElementsByClassName("call-btn");
const coinCount = document.getElementById("coin-count");
let coins = 100;
for (const btn of callBtns){
    btn.addEventListener('click',function(){
        const card = this.parentElement.parentElement
        const serviceNames = card.getElementsByClassName("service-name");
        const serviceNumbers = card.getElementsByClassName("service-number");
        for(const service of serviceNames){
            for(const number of serviceNumbers){
                if(coins >= 20){
                    coins -= 20
                    coinCount.innerText = coins
                    alert(`Calling ${service.innerText} ${number.innerText}... `);
                }
                else{
                    alert("Insufficient coins for calling...")
                }
            }               
        }  
})
}  
