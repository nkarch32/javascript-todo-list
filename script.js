/* Display random inspirational quote upon page load */
const quoteContainer = document.getElementById("inspirationalQuoteContainer");

window.onload = function() {

    const niceQuotes = [
        "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",  
        "You do not find the happy life. YOU MAKE IT. -Camilla Eyring Kimball", 
        "You must do the things you think you cannot do. -Eleanor Roosevelt", 
        "It isn't where you came from. It's where you're going that counts. -Ella Fitzgerald"
    ];
    const randomQuote = niceQuotes[Math.floor(Math.random() * niceQuotes.length)];
    
    const quote = document.createElement("h2");
    quote.innerText = randomQuote;
    quoteContainer.appendChild(quote);
}


/* Add Task to Task List */
const addTaskButton = document.getElementById("addTask");
const toDoListContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

function addTask() {
    
    if (inputField.value === "") {
        alert("Please enter a task!"); //ensures the inputField actually has a task
    } else {
        /* Add tasks to the toDoListContainer and style the new children nodes */
        const toDoList = document.createElement("li");
        const toDoListDeleteBtn = document.createElement("button"); //add a cancel button to each task
        toDoList.innerText = inputField.value;
        toDoListDeleteBtn.innerText = "Delete Task";
        toDoList.classList.add("todolist-styling"); //add a classname to new nodes, so they may be styled via css
        toDoListDeleteBtn.classList.add("delete-task-styling"); //css classname for delete btn
        toDoListContainer.appendChild(toDoList);
        toDoList.appendChild(toDoListDeleteBtn);
        inputField.value = "";

    }

}

addTaskButton.addEventListener("click", addTask);
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); //prevents the enter key event from listing items twice
        addTask();
    }
});

/* Delete Button Things... Work in Progress

const deleteTask = function() {
    const toDoList = this.parentNode;
    const ul = toDoList.parentNode;
    ul.removeChild(toDoList);
};

for (var i = 0; i> toDoListContainer.children.length; i++) {
    bindTaskEvents(toDoListContainer.children[i])

};

const toDoListDeleteBtn = document.createElement('button');
toDoListDeleteBtn.onclick = deleteTask;*/






/*function deleteTask() {
    
    /*const removeTask = document.getElementsByClassName("delete-task-styling");
    var i;
    for (i = 0; i < removeTask.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }*/

/*const toDoListDeleteBtn = document.createElement("button");
 toDoListDeleteBtn.addEventListener('click', deleteTask);*/