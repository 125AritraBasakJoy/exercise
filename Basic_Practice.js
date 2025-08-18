
        //alert("Aritra Basak Joy");
        // document.write('<h1 style="color: red"> hello Joy!! </h1>');
        // document.write("Aritra Basak Joy");
        //console.log("This is Joy");

        //Variable Declaration
        let firstName = document.createElement("h1");
        firstName.textContent= "Aritra Basak Joy";
        firstName.style.color = "red";
        firstName.style.fontFamily = "Times New Roman";
        firstName.style.textAlign = "center";
        firstName.style.fontSize = "50px";
        firstName.style.marginTop = "20px";
        firstName.style.marginBottom = "20px";
        document.body.appendChild(firstName);

        const myEmail= document.createElement("p");
        myEmail.textContent = "Email: aritra.joy@bracits.com";
        myEmail.style.color = "black";
        document.body.appendChild(myEmail);

        //Number Variable
        let myAge = document.createElement("p");
        myAge.textContent = "My Age is: " + 25;
        document.body.appendChild(myAge);

        let myHeight = document.createElement("p");
        myHeight.textContent = "My Height is: " + 5.9 + " inches";
        document.body.appendChild(myHeight);

        //Create element with id
        let demo= document.createElement("p");
        demo.id = "demo";
        document.body.appendChild(demo);

        //Boolean Variable
        let x = 5;
        let y = 10;
        document.getElementById("demo").innerHTML = (x < y) ? "x is less than y" : "x is greater than to y";

        //Object Variable
        let hp = document.createElement("p");
        hp.id = "harryPotter";
        document.body.appendChild(hp);
        const mySelf = {firstName:"Harry Potter", Age: 28, favColor: "Red"};
        document.getElementById("harryPotter").innerHTML= "Name: " + mySelf.firstName+ ", Age: " + mySelf.Age + ", Favorite Color: " + mySelf.favColor;

