const allQuestions = {
    Employee: [
        {
            type: "input",
            name: "name",
            message: "Enter employee name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID: "
        },
        {
            type: "list",
            name: "role",
            message: "Select employee role: ",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ],

    Manager: [
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager office number: "
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "github",
            message: "Enter engineer GitHub profile name: "
        }
    ],

    Intern: [
        {
            type: "input",
            name: "school",
            message: "Enter intern school name: "
        }
    ],

    moreTeam: [
        {
            type: "confirm",
            name: "more",
            message: "Add another employee to the team? "
        },
    ]
}

module.exports = allQuestions;