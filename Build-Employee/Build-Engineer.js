class Engineer {

    constructor(name, id, email, github) {
        
        if ((!name) || (!id) || (!email) || (!github)) {
            throw new Error("Engineer must have all parameters.")
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

module.exports = Engineer;