function bankOptions(){
    var options = prompt("Please select one of the numbers below");

    switch (options) {
        case "1":
            selection.innnerHTML = "You have selected Inter Bank Transfer";
            document.getElementById('selection').textContent = "You have selected Inter Bank Transfer";
            break;  
        case "2":
            selection.innnerHTML = "You have selected Same Bank Transfer";
            document.getElementById('selection').textContent = "You have selected Same Bank Transfer";
            break;
        case "3":
            selection.innnerHTML = "You have selected Quickteller";
            document.getElementById('selection').textContent = "You have selected Quickteller";
            break;
        case "4":
            selection.innnerHTML = "You have selected Bank Branch";
            document.getElementById('selection').textContent = "You have selected Bank Branch";
            break;
        case "5":
            selection.innnerHTML = "You have selected Withdraw";
            document.getElementById('selection').textContent = "You have selected Withdraw";
            break;
        default:
            selection.innnerHTML = "Please make a proper selection (numbers 1-5)";
            document.getElementById('selection').textContent = "Please make one a selection (numbers 1-5)";
            break;
    }
    
}