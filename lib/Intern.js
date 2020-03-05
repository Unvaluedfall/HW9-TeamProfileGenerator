const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title)
        this.school = school;
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
        return this.title = "Intern"
    }

    getSchool(){
        return this.school
    }

}

module.exports = Intern;