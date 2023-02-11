const Intern = require('../Build-Employee/Build-Intern')

//tests to check that it works if user input valid and invalid data
describe ('Intern', () => {
    describe ('test constructor', () => {

        it ('should throw if input is incorrect', () => {

            const A = () => new Intern('bob', '20', 'SMU')

            expect(A).toThrow()
        })

        it ('should pass if correct', () => {

            const A = () => new Intern('bob', '20', 'bob@bob.com', 'SMU')

            expect(A).not.toThrow()
        })
    })
})