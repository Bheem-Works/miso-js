function miso(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{
        if(!response.ok){
                throw new Error("Your api not working man");
        }
        return response.json();
    }).then(result=>{
        console.log("Result",result);
    }).catch(error=>{
        console.error(error);
    })
}
miso();