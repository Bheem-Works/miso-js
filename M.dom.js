// const miso = document.getElementById('miso');
// miso.addEventListener('click',()=>{
    //     console.log("kim miso is so hungry man");
    // })
    // miso.addEventListener('click',runEvent);
    // miso.addEventListener('dblclick',runEvent);
    // miso.addEventListener('mousedown',runEvent);
    // miso.addEventListener('mouseup',runEvent);
    
    // div.addEventListener('mouseenter',runEvent);
    // div.addEventListener('mouseover',runEvent);
    // div.addEventListener('mouseout',runEvent);
    const output = document.getElementById('output');
    const miso = document.getElementById('miso');
    const div = document.getElementById('div');
    
    function runEvent(e) {
        // console.log("enter type : " + e.type);
        // div.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3> <h3>MouseY: ' + e.offsetY + '</h3>';
        // div.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
        console.log(e.value);
    }
    
    // Add event listener
    div.addEventListener('mousemove', runEvent);