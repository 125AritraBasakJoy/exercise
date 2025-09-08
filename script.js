document.getElementById("loadbtn");
document.addEventListener("click", () => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = `<p class= "loading">Loading Data...</p>`;

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Error");
        }
        return response.json();
    })
    .then(data => {
      dataContainer.innerHTML = "<h3>Fetched Data:</h3>";
      data.forEach(user => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<strong>${user.name}</strong> (${user.email}) , ${user.address.city}`;
        dataContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      dataContainer.innerHTML = `<p class="error">Error loading data: ${error.message}</p>`;
    });
});