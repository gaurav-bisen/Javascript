const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //-db calls, network, cryptography
    setTimeout(() => {
        console.log('Async task is complete!');
        resolve() // now connect with then
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise consumed!');
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task two');
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved!');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "John", email: "John@gmail.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ name: "John", password: "1234" })
        } else {
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>{
        console.log("The promise is either resolved or rejected");
    })



const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ name: "Javascript", password: "1234" })
        } else {
            reject('ERROR: JS went wrong!')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const res = await promiseFive; // promise is eventual completion object not func thats why we dont use ()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


async function getAllUser(){
    try {
        const res = await fetch('api')
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUser()

fetch('api')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })