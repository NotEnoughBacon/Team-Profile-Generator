const Engineer = require('../Build-Employee/Build-Engineer')

//tests to check that it works if user input valid and invalid data
describe ('Engineer', () => {
    describe ('test constructor', () => {

        it ('should throw if input is incorrect', () => {

            const A = () => new Engineer('karen', '44', 'billy')

            expect(A).toThrow()
        })

        it ('should pass if correct', () => {

            const A = () => new Engineer('karen', '44', 'karen@karen.com', 'karen44')

            expect(A).not.toThrow()
        })
    })
})