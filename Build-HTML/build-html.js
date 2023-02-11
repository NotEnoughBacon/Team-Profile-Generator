const Engineer = require("../Build-Employee/Build-Engineer");
const Intern = require('../Build-Employee/Build-Intern');
const Manager = require('../Build-Employee/Build-Manger');

function buildCards (team) {

    let array = [];

    for (const employee of team) {
        if (employee instanceof Manager) {
            array += `
            <div class="card">
                <h2>${employee.name}</h2>
                <h3>Manager</h3>
                <h4>ID: ${employee.id} Office Number: ${employee.officeNumber}</h4>
                <a href="mailto:${employee.email}">Send me an email</a>
            </div>
            `
        }
        else if (employee instanceof Engineer) {
            array += `
            <div class="card">
                <h2>${employee.name}</h2>
                <h3>Engineer</h3>
                <h4>ID: ${employee.id}</h4>
                <a href="https://github.com/${employee.github}">GitHub</a>
                <a href="mailto:${employee.email}">Send me an email</a>
            </div>
            `
        }
        else if (employee instanceof Intern) {
            array += `
            <div class="card">
                <h2>${employee.name}</h2>
                <h3>Intern</h3>
                <h4>ID: ${employee.id} School: ${employee.school}</h4>
                <a href="mailto:${employee.email}">Send me an email</a>
            </div>
            `
        }
    }
    return array
}

function buildHTML (cards) {
return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>Employee List</title>
</head>
<body>
    <header class="header">
        <h1>Current Employees</h1>
    </header>
    <section>
        <div class="cardContainer">
           ${cards ? cards.toString().split(',') : ''}
        </div>
    </section>
</body>
</html>
`}

module.exports = {
    buildHTML: buildHTML,
    buildCards: buildCards
}