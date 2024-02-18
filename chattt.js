"use strict";
/ Define an array of places to visit;
let placesToVisit = ["Tokyo", "Paris", "New York", "Sydney", "Machu Picchu"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Print the array in Reverse alphabetical order without changing the original list
let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Show that the array order has changed
console.log("Array Order Changed:", placesToVisit);
// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order using a custom compare function
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
In;
this;
TypeScript;
code: The;
original;
array(placesToVisit);
is;
manipulated;
and;
printed in various;
orders;
without;
modifying;
the;
original;
list.
;
The;
sort;
method;
is;
used;
to;
create;
sorted;
arrays;
without;
changing;
the;
original;
array.
;
The;
reverse;
method;
is;
used;
to;
reverse;
the;
order;
of;
the;
array.
;
The;
original;
array;
is;
printed;
at;
different;
steps;
to;
demonstrate;
the;
changes.
;
