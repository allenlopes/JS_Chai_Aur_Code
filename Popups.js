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


// Line Break
alert("Hello\nHow are you?");



// History
    // History Forward
function goForward() {
  window.history.forward();
}

    // History Back
function goBack() {
  window.history.back();
}

// Timing
<button onclick="setTimeout(myFunction, 3000);">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>

// Stop
<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>

// Screen
document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;

// Window
<p id="demo"></p>

document.getElementById("demo").innerHTML =
"Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";

function openPopup() {
    window.open('popup.html', 'Popup', 'width=400,height=300');

// DOM MANIPULATION
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Popup Example</title>
<style>
    .popup {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 20px;
        z-index: 1000;
    }
</style>
<script>
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
</script>
</head>
<body>
<button onclick="openPopup()">Open Popup</button>
<div id="popup" class="popup">
    <button onclick="closePopup()">Close</button>
    <p>This is a popup!</p>
</div>
</body>
</html>



// Screen

document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;


// Confirm
var result = confirm("Are you sure you want to continue?");
if (result) {
  // User clicked OK
} else {
  // User clicked Cancel
}
