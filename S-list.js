// storing into the variable
 const submit = document.querySelector('.submit');
 submit.addEventListener('click',()=>{
    const misoInput = document.getElementById('misoInput').value;
    const li = document.createElement('li');
    const misoNode = misoInput.textContent = `${misoInput}`;
    li.append(misoNode);
    // console.log(li);
    document.getElementById('orderList').appendChild(li);
 });
