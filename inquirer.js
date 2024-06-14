import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "what is your name"
    },
    {
        name: "age",
        type: "number",
        message: "what is your age"
    },
    {
        name: "phone number",
        type: "password",
        message: "what is your phone number"
    },
    {
        name: "pincode",
        type: "number",
        message: "what is your pincode"
    },
    {
        name: "gender",
        type: "list",
        choices: ["male", "female", "other"]
    },
    {
        name: "confirm",
        type: "confirm",
        message: "are you sure"
    },
    {
        name: "choice",
        type: "checkbox",
        choices: ["html", "css", "javascript"]
    },
    {
        name: "choice",
        type: "rawlist",
        choices: ["html", "css", "javascript"]
    },
    {
        name: "range",
        type: "range",
        message: "select range"
    },
    {
        name: "date",
        type: "date",
        message: "select date"
    },
    {
        name: "time",
        type: "time",
        message: "select time"
    },
    {
        name: "color",
        type: "color",
        message: "select color"
    },
    {
        name: "new",
        type: "new",
        message: "select new"
    },
    {
        name: "file",
        type: "file",
        message: "select file"
    },
    {
        name: "editor",
        type: "editor",
        message: "select editor"
    },
    {
        name: "password",
        type: "password",
        message: "enter password"
    },
    {
        name: "secret",
        type: "secret",
        message: "enter secret"
    },
]);
console.log(user);
