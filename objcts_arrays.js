//const colors = ["red", "blue", "green"];
//skipping value while destructuring array
//const [, , third] = colors;
// console.log(third); 

const user = {
    id: 11,
    name: "Gaurav",
    email: "gaurav@gmail.com",
    age: 22,
    skills: ["React", "Node", "Express"],
    isActive: true,

    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

user.greet();
user.skills.push("MongoDB");

// Iterating over skills array
user.skills.forEach(skill => {
    console.log(skill);
});

// Destructuring object
const { name, email, skills } = user;
console.log(skills);

