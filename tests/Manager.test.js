const Manager = require('../Build-Employee/Build-Manger')

//tests to check that it works if user input valid and invalid data
describe('Manager', () => {
    describe('test constructor', () => {

        it ('Should throw an error if input is incorrect', () => {

            const A = () => new Manager('jeff', '10', 'jeff@jeff.com')

            expect(A).toThrow();
        })

        it ('Shouldnt throw if all inputs are correct', () => {

            const A = () => new Manager('jeff', '10', 'jeff@jeff.com', '69')

            expect(A).not.toThrow();
        })
    })
})