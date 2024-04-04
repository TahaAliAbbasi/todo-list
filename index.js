#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "What do you want to add in your Todos ?"
        },
        {
            name: "addMoreTodos",
            type: "confirm",
            message: "Do you want to add more todos ?",
            default: "false"
        }
    ]);
    todos.push(addTask.todos);
    condition = addTask.addMoreTodos;
    console.log(todos);
}
