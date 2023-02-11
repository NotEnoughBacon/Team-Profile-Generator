class Engineer {

    //sets constructor
    constructor(name, id, email, github) {
        
        //throws error if invalid
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