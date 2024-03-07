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


// Navigator
<p id="demo"></p>;
document.getElementById("demo").innerHTML =
  "cookiesEnabled is " + navigator.cookieEnabled;


// History
    // History Forward
function goForward() {
  window.history.forward();
}

    // History Back
function goBack() {
  window.history.back();
}