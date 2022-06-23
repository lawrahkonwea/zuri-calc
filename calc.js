var num1 = parseFloat(prompt("enter your first number: "))
var opr = prompt("choose an operator: +,-,*,/")
var num2 = parseFloat(prompt("enter your second number: "))

let output = 0;
if (opr == "+") {
    output = num1 + num2;
    alert(output);
} else if (opr == "-") {
    output = num1 - num2
    alert(output);
} else if (opr == "*") {
    output = num1 * num2
    alert(output);
} else if (opr == "/") {
    output = num1 / num2
    alert(output);
} else if (opr != "+,-,*,/") {
    notFound = "Error,select an operator";
    alert(notFound);
}