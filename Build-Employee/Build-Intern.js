class Intern {

    constructor(name, id, email, school) {
        
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