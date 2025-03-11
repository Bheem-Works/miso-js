let a = "Good Morning WifeY!  You are So Much Precious for me! 💖";
let b = document.getElementById('demo');

let index = 0;

function c () {
    b.innerText = a.slice(0,index);

    index++;

    if(index > a.length) {
        index = 0;
    }
}
setInterval(c,300);