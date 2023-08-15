let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let advanceContainer = document.getElementById('advance-container');
advanceContainer.style.display = 'none'
let advanceCount = 0;
let helper;
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(
          buttonText == '÷'){
            buttonText = '/'
            screenValue += buttonText;
            screen.value = screenValue;
          }

        else if(buttonText == 'π'){

            buttonText = (3.14159265);
                
            if(screenValue.substr(-1) == '+' || screenValue.substr(-1) == '-' || screenValue.substr(-1) == '÷' || screenValue.substr(-1) == 'x'){
              screenValue += buttonText;
              screen.value = screenValue;
            }

            else{
                screenValue += '*' +  3.14159265
                screen.value = screenValue
            }
        }

        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == '=') {

            let ans = eval(screenValue);
            screen.value = "";
            screen.value = ans;

        }

        else if (buttonText == 'Del'){
            screen.value = screenValue.substr(0, screenValue.length-1);
            screenValue = screen.value;
          
        }
        
        else if(buttonText == 'Advance'){
            
            console.log(advanceCount)
            screen.value = screenValue;
            
            if(advanceCount % 2 == 0) 
               advanceContainer.style.display = 'block'
            
            else 
                advanceContainer.style.display = 'none'
            
            advanceCount++;
        }
        
        else if(buttonText == "Sin" || buttonText == 'Cos' || buttonText == 'Tan' || buttonText == 'Log'){
                screen.value = screenValue
            }
        
        else {
    
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function advanceFunction(e) {
    if(e == 'sin'){
        let ans = Math.sin(screenValue)
        screenValue = ans;
        screen.value = screenValue
    }
    else if(e == 'cos'){
        let ans = Math.cos(screenValue)
        screenValue = ans;
        screen.value = screenValue
    }
    else if(e == 'tan'){
        let ans = Math.tan(screenValue)
        screenValue = ans;
        screen.value = screenValue
    }
    else{
        let ans = Math.log10(screenValue)
        screenValue = ans;
        screen.value = screenValue
    }
}

