function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}
// fetchData((message) => {
//     console.log(message);
// });


//promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


//async await 
async function getData() {
    const result = await myPromise;
    console.log(result);
}

getData();



