class Intern {

    //sets constructor
    constructor(name, id, email, school) {
        
        //throws error if invalid data
        if ((!name) || (!id) || (!email) || (!school)) {
            throw new Error("Intern must have all parameters.")
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

module.exports = Intern;