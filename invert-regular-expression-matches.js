// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Okay? now what?

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
