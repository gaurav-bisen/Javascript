//Encapsulation : Bundling data + methods and hiding internals

class BankAccount {
    #balance = 0; //private field

    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(200);
console.log(acc.getBalance());

// #balance is truly private
// Prevents direct access from outside

//Abstraction : Expose only what’s necessary

class Car {
    start(){
        this.#injectFuel();
        this.#ignite();
        console.log("Car Started!");
    }

    #injectFuel(){}
    #ignite(){}
}

//You don’t care how it starts, just that it does.


//Inheritance : Reuse code via parent → child relationship

class User{
    constructor(name){
        this.name = name;
    }
    login(){
        console.log(this.name + " Logged in");
    }
}
class Admin extends User {
    deleteUser(){
        console.log("User deleted!");
    }

    constructor(name,role){
        super(name);
        this.role = role;
    }
}

const admin = new Admin("Gaurav");
admin.login();
admin.deleteUser();


//Polymorphism : Same method name, different behavior

class User1 {
    getRole() {
        return "User";
    }
}
class Admin1 extends User1 {
    getRole() {
        return "Admin"
    }
}

const users = [new User1(), new Admin1()];

users.forEach(u => console.log(u.getRole())); //Same method, different output.
