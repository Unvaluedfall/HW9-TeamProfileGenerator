const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, title, github){
        super(name, id, title);
        this.github = github;
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
        return this.title = "Engineer"
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;