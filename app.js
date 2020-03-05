const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

function promptUserManager() {
   return inquirer.prompt([
        {
            type:"input",
            name:"nameManager",
            message:"Whats your name?"
        },
        {
            type:"input",
            name:"idManager",
            message:"Whats your ID?"
        },
        {
            type:"input",
            name:"titleManager",
            message:"Whats your Job title"
        },
        {
            type:"input",
            name:"officeNumberManager",
            message:"Whats your Office Number?"
        },
        {
            type:"input",
            name:"memberCountEngineer",
            message:"How Many Engineers are on the Team?"
        },
        {
            type:"input",
            name:"memberCountIntern",
            message:"How Many Interns are on the Team?"
        }
    ])
}

function promptUserEngineer() {
   return inquirer.prompt([
    {
        type:"input",
        name:"nameEngineer",
        message:"Whats your name?"
    },
    {
        type:"input",
        name:"idEngineer",
        message:"Whats your ID?"
    },
    {
        type:"input",
        name:"titleEngineer",
        message:"Whats your Job title"
    },
    {
        type:"input",
        name:"githubEngineer",
        message:"Whats your Github?"
    }
    ])
}

function promptUserIntern() {
   return inquirer.prompt([
    {
        type:"input",
        name:"nameIntern",
        message:"Whats your name?"
    },
    {
        type:"input",
        name:"idIntern",
        message:"Whats your ID?"
    },
    {
        type:"input",
        name:"titleIntern",
        message:"Whats your Job title"
    },
    {
        type:"input",
        name:"schoolIntern",
        message:"Whats your School?"
    }
    ])
}

async function init(){
    const newEngineers = []
    const newInterns = []
    
    
    const promptManager = await promptUserManager()

    const newManager = new Manager(promptManager.nameManager, promptManager.idManager, promptManager.titleManager, promptManager.officeNumberManager)

    console.log(newManager)

    
    
    for(var i = 0; i < promptManager.memberCountEngineer; i++){
        const promptEngineer = await promptUserEngineer()
    

        newEngineers.push(new Engineer(promptEngineer.nameEngineer, promptEngineer.idEngineer, promptEngineer.titleEngineer, promptEngineer.githubEngineer))
    }
    console.log(newEngineers)

    for(var i = 0; i < promptManager.memberCountIntern; i++){
        const promptIntern = await promptUserIntern()

        newInterns.push(new Intern(promptIntern.nameIntern, promptIntern.idIntern, promptIntern.titleIntern, promptIntern.schoolIntern))
    }

    console.log(newInterns)

}

init()



