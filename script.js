let old_var = 0;
let item = 0;
let total = 0;
let counter = 0;
let operation = "";
let initial = document.querySelector('#OldExp');
let newp = document.querySelector('#CurExp');
let dotchecker = true;

function operation_checker(e){
    let variable = e.target.innerHTML;
    if (isNaN(variable) && variable != '.'){
        computing(variable);
    }
    else if(variable != '.' && dotchecker){
        dotchecker = false;
        item = Number(String(item)+".");
    }
    else{
        item = Number(String(item)+variable);
        newp.innerHTML = item;
    }  
}

function computing(operate){
    counter++;
    if(counter == 2){
        counter = 1;
        switch(operation){
            case "+":
                total = Number(old_var) + item;
                break;

            case "-":
                total = old_var - item;
                break;

            case "*":
                total = old_var * item;
                break;
            
            case "÷":
                total = old_var / item;
                break;
            case "A/C":
                total = 0;
                old_var = 0;
                item = 0;
                operation = "";
                counter = 0 ;
                initial.innerHTML = old_var;
                return;
            case "=":
                counter = 0;
                item = 0;
            // default:
        }
        old_var = total;
    }
    else{
        old_var = item;
    }
    initial.innerHTML = old_var;
    operation=operate;
    item = 0;
    newp.innerHTML = 0;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click' , operation_checker);    
});
