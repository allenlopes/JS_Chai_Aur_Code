// Prompt popups
    var result = prompt("Please enter your name");
    if(result == "" || result == null)
    {
        document.write("Please provide your name");
    }
    else
    {
        document.write("Welcome "+result);
    }

