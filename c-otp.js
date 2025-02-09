

// function 
function getRandomValues(arr,count){
    let result = [];
    for (let i = 0; i<count; i++) {
        const randomIndex = Math.floor(Math.random()* arr.length);
        result.push(arr[randomIndex]);
    }
    return result;
}

function generateOTP(){
    let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        let otp = [
            ...getRandomValues(lowercaseLetters,2),
            ...getRandomValues(uppercaseLetters,2),
            ...getRandomValues(numbers,2)
        ] 
        return otp.join('');
    };
    // console.log(generateOTP());

    document.querySelector('.miso').addEventListener('click', ()=>{
        document.getElementById('demo').innerHTML = generateOTP();
    });