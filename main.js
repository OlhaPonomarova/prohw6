"use strict";

var arr = ["8", "4", "3", "1"];
var a = 2;

function degree(c, d) {
    var newAr = [];

    for (var index in arr) {
        newAr.push(c[index] ** d);

    }
     
    return newAr;

}

var result = degree(arr, a);
degree(arr, a);
console.log(result);