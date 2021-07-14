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
        toDoList.innerText = inputField.value;
        toDoList.classList.add("todolist-styling"); //add a classname to new nodes, so they may be styled via css
        toDoListContainer.appendChild(toDoList);
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
























/*const task = document.getElementById("text").value;
const submit = document.getElementById("submit");

function addTask() {
    const toDoList = document.createElement("LI");
    const newTask = document.getElementById("text").value;
    const t = document.createTextNode(newTask);
    toDoList.appendChild(t);
    //toDoList.appendChild(newTask);
    //document.getElementById("taskList").appendChild(newTask);
    //console.log();
    /*document.getElementById("taskList").innerHTML = `${task}`;
}

submit.addEventListener("click", addTask);*/