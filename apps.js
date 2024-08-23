const display = document.getElementById("display");

function goWork(input){
    var a = new Audio('music.mp3');
    a.play();

    display.value +=input;
   
}
function clearDisplay(){
    var a = new Audio('music.mp3');
    a.play();
    display.value="";
}
function calculator(){
    var a = new Audio('music.mp3');
    a.play();
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }

}
function Single(){
    var a = new Audio('music.mp3');
    a.play();
    display.value= display.value.toString().slice(0,-1) ;
}


document.addEventListener('keypress',function(event){
    if (event.key >0 && event.key<=9){
        goWork(event.key);
    }
    else if (['+','-','*','/','%','.'].includes(event.key)){
        goWork(event.key);
    }
    else if (event.key==='Enter'){
        calculator();
    }
    else if (event.key === 'Backspace') {
        single(); 
    }
    else if (event.key === 'Escape') {
        clearDisplay();  // For 'Escape' key to clear display
    }
});