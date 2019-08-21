/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - default binding that shows everything working in the open window
* 2. Implicit Binding - tied to an object through a function
* 3. Explicit Binding - tied to an object through methods .call, .apply, and .bind
* 4. new Binding - function invoked with a 'new' keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function aFunction (name) {
    return `My name is ${this} .`
}

console.log(aFunction("Chris"));

// Principle 2

// code example for Implicit Binding

myObject = {
    name: "Chris",
    says: "hello",
    myFunction: function (name) {
        return `${this.name} says ${this.says}`
    }
}

console.log(myObject.myFunction("Katie"));

// Principle 3

// code example for New Binding

function Dog (name, breed) {
    this.name = name,
    this.breed = breed
};

const zeus = new Dog ("Zeus", "English Bulldog")
console.log(zeus);

const river = new Dog ("River", "Mutt")
console.log(river);

// Principle 4

// code example for Explicit Binding

const outside = {
    "stop":`Take a break.`
}

function nap (name) {
    return this.help;
}

console.log(nap.call(outside));