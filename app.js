const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const managerHTML = require('./templates/genManagerHTML');
const engineerHTML = require('./templates/genEngineerHTML');
const internHTML = require('./templates/genInternHTML');
const html = require('./templates/genMainHTML');

const allQuestions = require('./lib/allQuestions.js');

function askQuestions(Qs) {
    return inquirer.prompt(Qs);
}

async function getTeam() {

    try {
        let team = [];
        let moreEntries = true;

        while(moreEntries) {

            const res1 = await askQuestions(allQuestions.Employee);
            const res2 = await askQuestions(allQuestions[res1.role]);
            const member = await Object.assign(res1, res2);
            // console.log(member);
            team.push(member);
            // console.log(team);

            const res3 = await askQuestions(allQuestions.moreTeam);
            moreEntries = res3.more;
        }

        return team;        
    }

    catch (err) {
        console.log(err);
    }
}

function genTeamProfile() {



}

getTeam()
    .then(function(team) {
        genTeamProfile(team);
    });


// async function xxx() {
//     try {
//         let employeeCards = ""; // variable to add the employees' cards html
//         let addMore = true; // initialize the flag variable to add an employee

//         while(addMore) {
//             const employeeData = await inquirer.prompt(questions.employee);
//             switch(employeeData.role) { // switch by the role (Manager or Engineer or Intern)
//                 case "Manager":
//                     const managerData = await inquirer.prompt(questions.manager);
//                     const manager = new Manager(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, managerData.officeNumber);
//                     employeeCards += managerCard(manager);
//                     break;
//                 case "Engineer":
//                     const engineerData = await inquirer.prompt(questions.engineer);
//                     const engineer = new Engineer(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, engineerData.github);
//                     employeeCards += engineerCard(engineer);
//                     break;
//                 case "Intern":
//                     const internData = await inquirer.prompt(questions.intern);
//                     const intern = new Intern(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, internData.school);
//                     employeeCards += internCard(intern);
//                     break;
//             }
//             const addEmployee = await inquirer.prompt(questions.addEmployee);
//             if(!addEmployee.yes) addMore = false;
//         }
        
//         fs.writeFile("./output/team.html", html(employeeCards), function(err) {
//             if(err) return console.log(err);
//             console.log("team.html file successfully created!");
          
//         });
//     } catch(err) {
//         console.log(err);
//     }
// }