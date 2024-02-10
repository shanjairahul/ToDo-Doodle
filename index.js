var inp = document.getElementById("sukuna");
var add = document.getElementById("addtask");
var todo = document.getElementById("tasks");

alert("Hey There! Iam Doodle!! Welcome to ToDo Doodle!!! Please enter your tasks and click on the task to mark it as completed and double click for deleting that task !")

function addTask() {
  
  if(inp.value != ""){
    var elem = document.createElement("li");
    elem.innerText = inp.value;
    elem.classList.add("task-style");
    todo.appendChild(elem);
    inp.value = "";
    elem.addEventListener("click",()=>{
      
      elem.style.textDecoration = "line-through";
      elem.style.color = "rgb(0, 0, 0)";
      
    })
    
    elem.addEventListener("dblclick",()=>{
      todo.removeChild(elem);
    })
  }
  else{
    alert("Please type something!!!");
  }
  
  
}

function handlePress(event) {
  if(event.key === "Enter"){
    addTask();
  }
}

add.addEventListener("click",addTask);
inp.addEventListener("keypress",handlePress);





