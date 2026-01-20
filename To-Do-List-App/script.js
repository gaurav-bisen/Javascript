const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const doneList = document.getElementById("doneTasks");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

function allTasks() {
    list.innerHTML = ''; //clear list first (causing duplicates)
    tasks.forEach((task, idx) => {
        const li = document.createElement('li');
        // li.innerHTML = `• ${task} <button onclick="deleteTask(${idx})">delete</button>`;
        li.innerHTML = `${task.text} <a href="#" 
                    onclick="deleteTask(${idx})">
                    <span class="text-sm text-gray-500 mr-2">[${task.time}]</span>
                    <i class="fa-regular fa-square-check"></i>
                </a> `;
        list.appendChild(li);
    });
}

function allDoneTasks() {
    doneList.innerHTML = ''
    doneTasks.forEach((task, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `${task.text} <a href="#" onclick="deleteDoneTask(${idx})"><i class="fa-solid fa-trash-can"></i></a>`;
        doneList.appendChild(li);

    })
}

function saveAll() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    allTasks();
}

function deleteTask(idx) {
    const doneTask = tasks.splice(idx, 1)[0];
    doneTasks.push(doneTask);


    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    saveAll();
    allDoneTasks();
}

function deleteDoneTask(idx) {
    doneTasks.splice(idx, 1);
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    allDoneTasks();
}


btn.addEventListener("click", () => {
    const text = input.value;
    if (text) {
        tasks.push({
            text: text,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        });
        saveAll();
        input.value = '';
    }
});

allTasks();
allDoneTasks();
