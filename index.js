// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
}

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

function doSomething(thing) {
    console.log(thing);
}

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

function add(x, y) {
    return x + y;
}

function say(greeting, firstName) {
    console.log("I was called!")
    return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));


function marioActions(runDirection, jumpHeight) {
    return `${runDirection}, ${jumpHeight}`;
}

console.log(marioActions("left", "short"));

/*
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
*/