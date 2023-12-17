const accountId = 144553
let accountEmail = "allen@yopmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // JavaScript main ham log bina variable ke aage kuch bhi likhe hue(like var, let, const) aap variable ki memory reserve kar sakte ho.
let accountState; // Agar JavaScrit mai ham Variable declare karke chod dete hai aur uske value kuch nahi lagate hai, toh JavaScript usko Undefined mante hai while printing.

// accountId = 2 // Since accountId is declared with consant "const", therefore the value of accountId couldn't be changed or modified.

accountEmail = "sall@sal.com"
accountPassword = "2304"
accountCity = "Bengaluru"

console.log(accountId);
/*
Note :- JavaScript main mostly ham log "const" or "let" ka he istemal karte hai.
Because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // console.table will print all the values in tabular format.