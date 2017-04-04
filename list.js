var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

if(input === "list") {
  console.log(todos);
} else if(input === "new") {
  var newTodo = prompt("Enter new todo");

  todos.push(newTodo);
}

while(input !== "quit"){

}
console.log("Ok, You Quit the App");
