"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add2(a) {
    return a + 2;
}
add2(3);
console.log(add2(3));
function getUpperCase(str) {
    return str.toUpperCase();
}
console.log(getUpperCase('hello'));
function signUp(name, email, password, isPaid) { }
signUp('name', 'email', 123, true);
// problema!
function soma(num) {
    return 'hello';
}
function somaCerta(num) {
    return 1;
}
// em arrow function
var darOi = function (a) {
    return a;
};
// void
function consoleError(errormsg) {
    console.log(errormsg);
}
// never
function handleError(errormsg) {
    throw new Error(errormsg);
}
