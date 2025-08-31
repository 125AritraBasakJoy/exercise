const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const errorMsg = document.querySelector("small"); 

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        errorMsg.style.visibility="visible";
        return;
    }

    errorMsg.style.visibility="hidden";

    const list = document.createElement("li");
    list.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => list.remove();
    list.appendChild(delBtn);
    delBtn.style.backgroundColor = "#7C4585";
    delBtn.style.color = "#fff";
    delBtn.style.borderRadius = "5px";

    taskList.appendChild(list);

    taskInput.value = "";
});
