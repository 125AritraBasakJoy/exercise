document.getElementById("userForm");
document.addEventListener("submit", function(event){
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;

      let userData = { 
        name: name, 
        email: email 
    };

      sessionStorage.localStorage("user", JSON.stringify(userData));
      alert("Data Saved!");
    });

    
    document.getElementById("loadData");
    document.addEventListener("click", function(){
      let savedData = sessionStorage.getItem("user");

      if (savedData) {
        let user = JSON.parse(savedData);
        document.getElementById("output").innerText =
          `Name: ${user.name}, Email: ${user.email}`;
      } else {
        document.getElementById("output").innerText = "No saved data found.";
      }
      

    });