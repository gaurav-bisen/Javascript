const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function allTasks() {
    list.innerHTML = ''; //clear list first (causing duplicates)
    tasks.forEach((task,idx) => {
        const li = document.createElement('li');
        // li.innerHTML = `• ${task} <button onclick="deleteTask(${idx})">delete</button>`;
        li.innerHTML = `${task} <a href="#" onclick="deleteTask(${idx})"><i class="fa-solid fa-trash-can"></i></a>`;
        list.appendChild(li);
    });
}


function saveAll() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    allTasks();
}

function deleteTask(idx){
    tasks.splice(idx,1);
    saveAll();
}


btn.addEventListener("click", ()=>{
    const text = input.value;
    if (text) {
        tasks.push(text);
        saveAll();
        input.value = '';
    }
});

allTasks();
