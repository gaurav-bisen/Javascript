const input = document.getElementById("inputBox");
const btn = document.getElementById("addBtn");
const list = document.getElementById("listTodo");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function allTasks(){
    list.innerHTML = '';
    tasks.forEach((task,idx)=>{
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onClick="deleteTask(${idx})">delete</button>`;
        list.append(li);
    })
}

function saveAll(){
    localStorage.setItem("myTasks",JSON.stringify(tasks));
    allTasks();
}

function deleteTask(idx){
    tasks.splice(idx,1);
    saveAll();
}

btn.addEventListener("click", ()=>{
    const text = input.value;
    if(text){
        tasks.push(text);
        saveAll();
        input.value = '';
    }
});

allTasks();