const file = require('fs');
const inquirer = require('inquirer');
const Intern = require('./Build-Employee/Build-Intern');
const Engineer = require('./Build-Employee/Build-Engineer');
const build = require('./Build-HTML/build-html');

let listOfTeam = [];

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

        if (!manager.name || !manager.id || !manager.email || !manager.officeNumber) {
            throw new Error('Manager must have all fields filled.')
        }
        else {
            listOfTeam.push(manager)
            employeeRole()
        }
    })
}

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

function addIntern() {
    console.log('yes')
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
        console.log(listOfTeam)
    })
}


addManager();