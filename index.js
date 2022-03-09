//setting up my variables
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const employees = [];



//calling the function for the first manager box
function begin() {
firstBox();
}
//inital prompts starting off with the manager
function firstBox() {
inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "IDnum",
    },
    {
        type: "input",
        message: "What is the manager's email?", //make sure to do MAIL TO
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },
    ])

    .then((data) => {
    //got data with inquirer

    //create the person by instantiating the class
    let person = new Manager(data.managerName, data.IDnum, data.email, data.role, data.officeNumber);
    //create the html
    const name = person.getName();
    const role = person.getRole();
    const email = person.getEmail();
    const IDnum = person.getId();
    const officeNumber = person.getOfficeNumber();

      //call additional q here
    additionalBoxes()
//creating my base html for the manager box
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
    <h1>My Team</h1>
        <div class="boxes">
                <table class="table manager">
                    <thead>
                        <tr>
                        <th scope="col">${name}</th>
                        <th scope="col">${role}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${IDnum}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email: <a href= "mailto:${email}"target="_blank">${email}</a></th>
                        </tr>
                        <tr>
                        <th id="managerQ" scope="row">Office number: ${officeNumber}</th>
                        </tr>
                    </tbody>
                    </table>
                    <style>
                    
                    h1 {
                        height: 100px;
                        width: 100%;
                        text-align: center;
                        font-size: xx-large;
                        color: white;
                        background-color: rgb(68, 8, 8);
                        text-decoration: underline;
                    }
                    .boxes {
                        border: solid 1px black;
                        width: 350px;
                        height: 350px;
                        background-color: rgba(191, 227, 248, 0.774);
                        display: inline-block;
                        justify-content: space-evenly;
                        margin: 50px 50px 50px 50px;
                        align-items: center;
                    }
</style></div>`
        employees.push(html) //adding the employees to the html
    });
}

//creating a function for the additional employee types
function additionalBoxes() {
    inquirer.prompt([
        {
        type: "list",
        message: "What is your role?",
        choices: ["Intern", "Engineer", "Done building team"],
        name: "role",
    },
    //asking the intern questions
    ]) .then(data => {
    if (data.role === "Intern") {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "IDnum",
        },
        {
            type: "input",
            message: "What is the intern's email?", //make sure to do MAIL TO
            name: "email",
        },
        {
        type: "input",
        message: "What school does the intern go to?",
        name: "school",
        },
//creating the intern html
    ]) .then(data => {
    let person = new Intern (data.name, data.IDnum, data.email, data.role, data.school);
    const school = person.getSchool();
    const html =
    `<div class="boxes">
                <table class="table intern">
                    <thead>
                        <tr>
                        <th scope="col">${person.getName()}</th>
                        <th scope="col">${person.getRole()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${person.getId()}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email: <a href= "mailto:${person.getEmail()}"target="_blank">${person.getEmail()}</a></th>
                        </tr>
                        <tr>
                        <th scope="row">School: ${school}</th>
                        </tr>
                    </tbody>
                    </table>
                </div>`;
                employees.push(html)
                additionalBoxes()
    })
//prompting the engineer questions
    } else if (data.role === "Engineer") {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "IDnum",
        },
        {
            type: "input",
            message: "What is the engineer's email?", //make sure to do MAIL TO
            name: "email",
        },
        {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "gitHub",
        },
//Creating the engineer HTML
    ]) .then(data => {
    let person = new Engineer(data.name, data.IDnum, data.email, data.role, data.gitHub);
    const github = person.getGithub();
    const html =
    `<div class="boxes">
                <table class="table engineer">
                    <thead>
                        <tr>
                        <th scope="col">${person.getName()}</th>
                        <th scope="col">${person.getRole()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">ID:${person.getId()}</th>
                        </tr>
                        <tr>
                        <th scope="row">Email: <a href= "mailto:${person.getEmail()}"target="_blank">${person.getEmail()}</a></th>
                        </tr>
                        <tr>
                        <th scope="row">Github: <a href= "https://github.com/${github}"target="_blank">${github}</a></th>
                        </tr>
                    </tbody>
                    </table>
            </div>`;
            employees.push(html) //pushing the new data to the array
            additionalBoxes() //calling additional boxes
    })
    } else {
        employees.push(closingHTML) //adding the closing html to the array
        employees.join() //stringing together the array of employees
        
        fs.writeFile("./Dist/employeeinfo.html", employees.join(), (err) => { //writing the html file with the info
        console.log("The information has been generated!");
        err ? console.error(err) : console.log("Check the Dist folder for your new html file");
        });
    }
})
}

//calling the function to begin the questions
begin();

//the closing HTML for the page
let closingHTML =
    `</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`