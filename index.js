const file = require('fs');
const inquirer = require('inquirer');
const Intern = require('./Build-Employee/Build-Intern');
const Engineer = require('./Build-Employee/Build-Engineer');
const Manager = require('./Build-Employee/Build-Manger');
const build = require('./Build-HTML/build-html')

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
        listOfTeam.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber))
        employeeRole()
    })
}

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
        else (response.addMore === 'no') {
            file.writeFile('./browser/index.html', build.buildHTML(listOfTeam), (err) => {
                err ? console.error(err) : console.log('Your HTML has been built!')
            })
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

module.exports = listOfTeam
