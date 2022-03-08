const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engingeer");
const employees = [];




//live coding today

// const managerPrompt = [
//     {
//         type: "input",
//         message: "What is the manager's name?",
//         name: "name",
//     },
//     {
//         type: "input",
//         message: "What is the manager's ID number?",
//         name: "IDnum",
//     },
//     {
//         type: "input",
//         message: "What is the mamager's email?", //make sure to do MAIL TO
//         name: "email",
//     },
// ]

// function main(){
//     prompt(managerPrompt).then(data => {
//         console.log(data)
//         const manager = new Manager(data.name, data.IDnum, data.email, data.officeNum);
//         employees.push(managers);
//     })
// }
// main()



// function addEmployees(){
//     prompt[
//             {
//             type: "list",
//             message: "What would you like to do?",
//             choices: ["Add an employee", "create roster"],
//             name: "choice",
//             }]
//             .then(data => {
//                 console.log("Your choice ---", data.choice)
//                 if(data.choice === "Add an employee"){
//                     const emp = new Engineer(data.name, data.id, data.email, data.extra);
//                     employees.push(emp)
//                 } else{
//                     const emp = new Intern(data.name, data.id, data.email, data.extra);
//                     employees.push(emp)
//                 }
//                 console.log(`${data.role} added to team!`)
//                 setTimeout(addEmployee, 1500)
//             })
// } else {

// }


//end live coding today


function begin() {
firstBox();

}
function firstBox() {
inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "IDnum",
    },
    {
        type: "input",
        message: "What is your email?", //make sure to do MAIL TO
        name: "email",
    },
    {
        type: "list",
        message: "What is your role?",
        choices: ["Manager", "Employee", "Intern", "Engineer"],
        name: "role",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNum",
    },
    ])

    .then((data) => {
      //got data with inquirer

      //create the person by instantiating the class
    const person = new Manager(data.managerName, data.IDnum, data.email, data.role, data.officeNum);
    person = new Intern(data.name, data.IDnum, data.email, data.role, data.school);
    person = new Engineer(data.name, data.IDnum, data.email, data.role, data.gitHub);


      //create the html
    const name = person.getName();
    const role = person.getRole();
    const email = person.getEmail();
    const ID = person.getIDnum();

      //call additional q here
    additionalBoxes(person)

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="Dist/style.css">
        <title>Document</title>
    </head>
    <body>
        <div class="row justify-content-around">
            <div id="employeeBox" class="col-4">
                <table class="table manager">
                    <thead>
                        <tr>
                        <th scope="col">${data.name}</th>
                        <th scope="col" id="badge"></th>
                        <th scope="col">${data.role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${data.IDnum}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email: ${data.email}</th>
                        </tr>
                    </tbody>
                    </table>
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`;
    });
}
function additionalBoxes(person) {
return new Promise(function (resolve, reject) {
    let data = "";
    if (person.getRole() === "Intern") {
    inquirer.prompt([
        {
        type: "input",
        message: "What school do you go to?",
        name: "school",
        },
    ]);
    const school = person.getSchool();
    `<div id="internBox" class="col-4">
                <table class="table intern">
                    <thead>
                        <tr>
                        <th scope="col">${data.name}</th>
                        <th scope="col" id="badge"></th>
                        <th scope="col">${data.role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${data.IDnum}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email:${data.email}</th>
                        </tr>
                        <tr>
                        <th scope="row">School: ${data.school}</th>
                        </tr>
                    </tbody>
                    </table>
                </div>`;
    } else if (role === "Manager") {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your office number?",
        name: "officeNum",
        },
    ]);
    const officeNum = person.getOfficeNum();
    `<div id="managerBox" class="col-4">
                <table class="table employee">
                    <thead>
                        <tr>
                        <th scope="col">${data.name}</th>
                        <th scope="col" id="badge"></th>
                        <th scope="col">${data.role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${data.IDnum}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email:${data.email}</th>
                        </tr>
                        <tr>
                        <th id="managerQ" scope="row">Office number: ${data.officeNum}</th>
                        </tr>
                    </tbody>
                    </table>
                </div>`;
    } else if (role === "Engineer") {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your Github username?",
        name: "gitHub",
        },
    ]);
    const gitHub = person.getGithub();
    `<div id="engineerBox" class="col-4">
                <table class="table engineer">
                    <thead>
                        <tr>
                        <th scope="col">${data.name}</th>
                        <th scope="col" id="badge"></th>
                        <th scope="col">${data.role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${data.IDnum}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email:${data.email}</th>
                        </tr>
                    <tr>
                        <th scope="row">Github:${data.gitHub}</th>
                        </tr>
                    </tbody>
                    </table>
            </div>`;
    }

    console.log("Response:", data);
    fs.appendFile("index.html", html, (err) => {
    err
        ? console.error(err)
        : console.log("The information has been generated!");
    });
    
    // console.log("Response:", data);
    // fs.writeFile("index.html", html, (err) => {
    //   err ? console.error(err) : console.log("The information has been generated!");
    // });
});
}

begin();
