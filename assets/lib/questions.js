const questions = {
    employee: [
        {
            type: "input",
            name: "name",
            message: "Enter employee name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter employe ID: "
        }
        {
            type: "list",
            name: "role",
            message: "Select employee role: ",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ],

    manager: [
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager office number: "
        }
    ],

    engineer: [
        {
            type: "input",
            name: "github",
            message: "Enter engineer GitHub profile name: "
        }
    ],

    intern: [
        {
            type: "input",
            name: "school",
            message: "Enter intern school name: "
        }
    ],

    moreTeam: [
        {
            type: "confirm",
            name: "yes",
            message: "Add another employee to the team? "
        },
    ]
}

module.exports = questions;