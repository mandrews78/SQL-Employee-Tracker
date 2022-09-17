const db = require("../db/connection");
const consoleTable = require('console.table');
const inquirer = require("inquirer");

const employeeTracker = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "task",
            message: "What task would you like to perform?",
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Remove an employee',
                "Exit"

            ]
        }
    ])
        .then(answers => {
            const nextPrompt = answers.task
            if (nextPrompt === "View all departments") {
                viewDepartments();
            };
            if (nextPrompt === "View all roles") {
                viewRoles();
            };
            if (nextPrompt === "View all employees") {
                viewEmployees();
            }
            if (nextPrompt === "Add a department") {
                addDepartment();
            }
            if (nextPrompt === "Add a role") {
                addRole();
            }
            if (nextPrompt === "Add an employee") {
                addEmployee();
            }
            if (nextPrompt === "Update an employee role") {
                updateEmployeeRole();
            }
            if (nextPrompt === "Remove an employee") {
                removeEmployee();
            }
            if (nextPrompt === "Exit") {
                process.exit();
            };
        })
};

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return employeeTracker();
    });
};