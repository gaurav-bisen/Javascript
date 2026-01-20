//object literals
const user = {
    username : "Gaurav",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from DB!");
        console.log(`Username: ${this.username}`); 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


//CONSTRUCTOR FUNCTIONS

//new - is constructor function - to create multiple instances from object literals

//const promiseOne = new Promise(); // -> new to create new context
//const date = new Date();

// constructor function always give new instance, new copy
// orignal and others cant effect from it


function User(username, loginCount, isLoggedIn){
    this.username = username; // inside func variable = passed value in function
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //methos also used
    this.greeting = function(){
        console.log(`Welcome ${this.username} !`);
    }

    // return this; implicitly defiened dont want to use
    return this;
}

const userOne = new User("gaurav", 21, true);
const userTwo = new User("bisen", 25, false); // all value override in previous user

console.log(userOne);
console.log(userOne.constructor); // gives user function, constructor is  reference of our own
console.log(userTwo);
console.log(userOne.greeting());

//New keyword -
// when we use new keyword, an empty object first created which is called instance.  

//1- new object created
//2- constructor function called beacause of new
//3- this keyword -  argument inject inside it
//4- found inside function

//instanceof - to se if the prototype property of a constructor appears anywhere in the prototype chain of an object.
//the return value is a boolean value


