const file = require('fs');
const inquirer = require('inquirer');
const Intern = require('./Build-Employee/Build-Intern');
const Engineer = require('./Build-Employee/Build-Engineer');
const Manager = require('./Build-Employee/Build-Manger');
const build = require('./Build-HTML/build-html')

//empty array for employees
let listOfTeam = [];

//adds a manager using .prompt then pushes the manager to the array, calls for new employee
function addManager() {

    inquirer.prompt( [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of your Manager?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the managers employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your managers Email?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your managers office number?'
        } 
    ]).then ( (manager) => {
        listOfTeam.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber))
        employeeRole()
    })
}

//asks the user if they want to add more employees. if yes, goes to the add employees function, if no, writes an html file using the user inputted data in the array
function moreEmployees() {
    inquirer.prompt( [
        {
            name: 'addMore',
            type: 'list',
            message: 'Would you like to add more employees?',
            choices: [
                'yes',
                'no'
            ]
        }
    ]).then((response) => {
        
        if (response.addMore === 'yes') {
            employeeRole();
        }
        if (response.addMore === 'no') {
            file.writeFile('./browser/index.html', build.buildHTML(build.buildCards(listOfTeam)), (err) => {
                err ? console.error(err) : console.log('Your HTML has been built!')
            })
        }
    })
}

//asks the user if its an intern or engineer, calls the function accordingly
function employeeRole() {

    inquirer.prompt( [
        {
            name: 'employeeType',
            type: 'list',
            message: 'Would you like to add an Intern or Engineer?',
            choices: [
                'Intern',
                'Engineer'
            ]
        }
    ]).then ((response) => {

        if (response.employeeType === 'Intern') {
            addIntern();
        }

        if (response.employeeType === 'Engineer') {
            addEngineer();
        }
    })
}

//asks questions for the intern, then calls function for adding more
function addIntern() {

    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the intern?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the interns id?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the interns email?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the interns school?'
        }
    ]).then ((intern) => {

        listOfTeam.push(new Intern(intern.name, intern.id, intern.email, intern.school))
        moreEmployees();
    })
}

//same as intern, questions for engineer
function addEngineer() {

    inquirer.prompt ( [ 
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the engineer?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the engineers id?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineers email?'
        },
        {
            name: 'github',
            type: 'input',
            message: "What is the engineers GitHub?"
        }
    ]).then((response) => {

        listOfTeam.push(new Engineer(response.name, response.id, response.email, response.github))
        moreEmployees();
    })
}

addManager();

