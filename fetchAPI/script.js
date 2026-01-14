const btn = document.getElementById("loadBtn");
const list = document.getElementById("userList");

async function fetchUser(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        list.innerHTML = "";
        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", fetchUser);
