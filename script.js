const inputValue = document.querySelector("#textInput");
const pushButton = document.querySelector("#push");
const taskList = document.querySelector("#tasks");
let id = 0;
let itemlist = [];
let lastAction = "All";



document.querySelector('#push').onclick = function () {
    if (document.querySelector('#textInput').value) {
        newItem();
        reRender();
    } else {
        alert("Please fill out the task")
    }
    document.querySelector('#textInput').value = "";
}

function newItem() {
    itemlist.push({ usertext: inputValue.value, id: id++, ischecked: false, deleteElement: false });
}

function filterAll() {
    lastAction = "All";
    reRender();
}

function filterActive() {
    lastAction = "Active";
    reRender();
}

function filterCompleted() {
    lastAction = "Completed";
    reRender();
}

function reRender() {
    taskList.innerHTML = "";
    let filtered = itemlist.filter((item) => {
        if (lastAction === "Active") {
            return !item.ischecked;
        }
        if (lastAction === "Completed") {
            return item.ischecked;
        }
        return true;
    });
    filtered.forEach((item, index, array) => {
        addTask(item, index);
    })
}

function addTask(item, index) {

    if (item.deleteElement) {
        return;
    }

    //New Task
    const newDiv = document.createElement("div");
    newDiv.classList.add('div-style');
    newDiv.innerText = item.usertext;
    taskList.appendChild(newDiv);
    newDiv.setAttribute("id", `newDiv${item.id}`);

    //Complete button
    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    if (item.ischecked) {
        newCheckBox.setAttribute("checked", "true");
        newDiv.classList.add('crossed');
    }
    newCheckBox.classList.add('compButton');
    newCheckBox.setAttribute("id", `completeButton${item.id}`);
    newCheckBox.addEventListener("change", (item) => newCheck(item, index));

    //Delete Button
    const newButton = document.createElement("button");
    newButton.classList.add('delButton');
    newButton.setAttribute("id", `deleteButton${item.id}`);
    newButton.innerText = "x";
    newButton.addEventListener("click", () => deleteTask(index));

    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newButton);
}

function deleteTask(index) {
    itemlist[index].deleteElement = true;
    reRender();
}

function newCheck(item, index) {
    let Check = item.target.checked;
    itemlist[index].ischecked = Check;
    reRender();
}















































































































































































//Kocham Miszelina <3 :*