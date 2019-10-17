/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding: this refers to Window Object
* 2. Implicit Binding: The object that is standing before the dot is what this keyword is bound to.
* 3. Explicit Binding: you can force a function call to use a particular object for this binding, without putting a property function
     reference on the object. so we explicitly say to a function what object it should use for this — using functions such as .call, .apply and bind .
* 4. New Binding: 1- An empty object is created and referenced by this variable, inheriting the prototype of the function.
                  2- Properties and methods are added to the object referenced by this.
                  3- The newly created object referenced by this is returned at the end implicitly (if no other object was returned explicitly).
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const myWindow = () => {
    console.log(this.a);
 }
 var a = 1776;
 
 myWindow();    //Window Object outputs he this.a



// Principle 2
// code example for Implicit Binding

let myImplicitBinding = {
    name: 'Implicit',
    type: 'Binding',
    binding: function(){
      console.log(`${this.name} ${this.type}`);
    }
  }
  
  myImplicitBinding.binding();

// Principle 3
// code example for New Binding

function Binding(saying){
    this.phrase = saying;
  }
  
  let myBinding = new Binding('This is a NEW BINDING');
  
  console.log(myBinding.phrase); // function is being invoked


// Principle 4
// code example for Explicit Binding

//call
function explicit(){
  console.log(`${this.name} ${this.type}`);
}

let myExample1 = {
  name: 'Call:',
  type: 'This is an Explicit Binding'
}

let myExample2 = {
  name: 'Another Call:',
  type: 'This is another Explicit Binding'
}

explicit.call(myExample1); //invoking the function here
explicit.call(myExample2);