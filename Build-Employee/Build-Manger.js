class Manager {

    //sets the constructor
    constructor(name, id, email, officeNumber) {
        
        //throws error if user inputted invalid data
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