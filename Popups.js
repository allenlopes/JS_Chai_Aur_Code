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


// Confirm Popup
    var result = confirm("Are you sure?");
    if (result == true) {
      document.write("Allen");
    } else {
      document.write("Okayy");
    }


// Alert
    alert("Allennn");


// Array pop
    var arr = ["Allen", "Sall"];
    for (var i = 0; i < 2; i++) {
      document.write(arr[i]);
      document.write(" ");
    }