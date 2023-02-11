class Manager {

    constructor(name, id, email, officeNumber) {
        
        if ((!name) || (!id) || (!email) || (!officeNumber)) {
            throw new Error("Engineer must have all parameters.")
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;