const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

async function fetchUsers() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/users");
    const users = await response.json();

    userList.innerHTML = "";

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

  } catch (error) {
    console.log("Error fetching data", error);
  }
}

button.addEventListener("click", fetchUsers);
