//Iterators (custom)

function makeIterator(start=0, end=Infinity, step=1){
    //step size - increment by 1

    let nextStart = start;
    let iterationCount = 0;

    return {
        next() { // next func checks what is next value
            let result;
            if(iterationCount < end){
                result = { value: nextStart, done: false} //done: false -> tell to user that we have remain pending entry, not finished

                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true} // end - cond became false
        }
    }
}

//khud ka iterator jo step size 1 le rha hai, 10 tk jara hai

const myIterator = makeIterator(1 ,10, 2);
let result = myIterator.next();

while ((!result.done)) {  //until result not done
    console.log(result.value);
    result = myIterator.next();
}

//not used in for loop