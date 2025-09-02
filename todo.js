const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const errorMsg = document.querySelector("small");
const descriptionInput = document.getElementById("textdesc"); 

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const desc = descriptionInput.value.trim();

    if (taskText === "") {
        errorMsg.style.visibility = "visible";
        return;
    }

    errorMsg.style.visibility = "hidden";

    const list = document.createElement("li");


    const taskTitleEl = document.createElement("strong");
    taskTitleEl.textContent = taskText;
    list.appendChild(taskTitleEl);

    if (desc !== "") {
        const taskDescEl = document.createElement("p");
        taskDescEl.textContent = desc;
        list.appendChild(taskDescEl);
    }
    

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => list.remove();
    delBtn.style.backgroundColor = "#7C4585";
    delBtn.style.color = "#fff";
    delBtn.style.borderRadius = "5px";
    delBtn.style.marginLeft = "10px";
    list.appendChild(delBtn);

    taskList.prepend(list);

    taskInput.value = "";
    descriptionInput.value = "";
    
});
