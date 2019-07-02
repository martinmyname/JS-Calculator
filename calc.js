var displayResult = (onClick) => {
        btnText = onClick.target.innerText;

        if(displayValue ==="0")
            displayValue = "";
        displayValue+=btnText;
        getElementByClass('col-sm-2').innerText = displayResult;
function calcNumbers(){
        form.displayResult.value=form.displayResult.value+result;
        
    };
    