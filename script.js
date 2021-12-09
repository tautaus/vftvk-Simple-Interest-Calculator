function compute() {
    //Get the values and calculate 
    if (validateAmount())
    {
        var principal = parseFloat(document.getElementById("principal").value);
        var rate = parseFloat(document.getElementById("rate").value);
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate / 100;
        var futureYear = new Date().getFullYear() + years;
        //Create the Interest text
        document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + futureYear + "</mark>";
    }
}

function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value + "%";
}

//Check for non_negative values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) < 0) 
    {
        alert("Enter a non-negative number");
        document.getElementById("principal").focus();
        return false;
    }
    return true;
}