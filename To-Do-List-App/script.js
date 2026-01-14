const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function allTasks() {
    list.innerHTML = ''; //clear list first (causing duplicates)
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `• ${task}`;
        list.appendChild(li);
    });
}

function saveAll() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    allTasks();
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
