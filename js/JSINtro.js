"use strict";

console.log("Still works!");

var surprise = "How copy?";

alert(surprise);

var queryMIB = "Have you been probed by aliens?";
confirm(queryMIB);
console.log("answer="+queryMIB);

var queryFollowUp = "What color were the aliens?";
var responseFollowUp = prompt(queryFollowUp);
console.log(responseFollowUp);

var queryFinal = "Saucer or transporter?";
var answerFinal = prompt(queryFinal);
console.log(typeof answerFinal);
