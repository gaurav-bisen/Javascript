function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

// const even = count();

// for(const v of even){
//     console.log(v);
// }

//to create iteerator of own (interators.js - function with generator function)

//using genrator function creating our own iterator

function* makeMyIteratorNew(start, end, stepSize=1){
    for(let i=start; i<=end; i += stepSize){
        yield i;
    }
}

const btn = document.getElementById("nextBtn");
let one = makeMyIteratorNew(1, 20, 2);

// for(const val of one){
//     console.log(val);
// }

btn.addEventListener("click", ()=>{
    btn.innerText = one.next().value;
})