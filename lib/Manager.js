const Employee = require("../lib/Employee")

class Manager extends Employee{
    constructor(name, id, title, officeNumber){
        super(name, id, title);
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.getEmail
    }

    getRole(){
        return this.title = "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager;