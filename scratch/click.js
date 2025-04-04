const increament = document.getElementById("increament");
const decrement = document.getElementById("decreament");
const count = document.getElementById("count");

    let initialCount = 0;    
increament.addEventListener("click",()=>{
    initialCount++;
    count.innerText = initialCount;
})

decrement.addEventListener("click",()=>{
    initialCount--;
    count.innerText = initialCount;
})