
function switchStatement(){
    var designation = prompt("What case?");
    // var switches = document.getElementById("switches");

    switch (designation) {
        case "ceo":
            switches.innerHTML = "Your salary is $300,000";
            break;
        case "manager":
            switches.innerHTML = "Your salary is $200,000";
            break;
        case "contract":
            switches.innerHTML = "Your salary is $100,000";
            break;
        case "intern":
            switches.innerHTML = "Your salary is $50,000";
            break;
        default:
            switches.innerHTML = "Input proper designation";
            break;
    }

}