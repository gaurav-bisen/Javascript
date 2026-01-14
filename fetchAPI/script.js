const btn = document.getElementById("loadBtn");
const list = document.getElementById("userList");
const statusList = document.getElementById("status");

async function fetchUser() {
    try {
        statusList.textContent = "Loading users...";

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // Manual error handling for HTTP errors
        if (!res.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await res.json();

        list.innerHTML = "";
        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });

        statusList.textContent = "Users loaded successfully";

    } catch (error) {
        console.log(error);
        statusList.textContent = "Failed to load users. Please try again.";
    }
}

btn.addEventListener("click", fetchUser);
