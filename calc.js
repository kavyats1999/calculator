// display
function display(num){
    output.value += num;    
}

// clear =AC
function clearAll(){
    output.value="";
}

// evaluate

function evaluvateExp(){
    // method 1
    // exp=output.value;  //exp=7+7
    // result=eval(exp);   //result=14
    // output.value=result; // display=14
    output.value=eval(output.value);
}

// remove last item

function removeLast(){
    currentExp=output.value;
    output.value=currentExp.slice(0,-1);
}