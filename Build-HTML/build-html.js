const listOfTeam = require('../index');
console.log(listOfTeam)

function buildHTML () {
    
`
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
           
        </div>
    </section>
</body>
</html>
`}

module.exports = buildHTML;