USE employee_db;
INSERT INTO departments (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");
INSERT INTO roles (title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
("John", "Doe", 1),
("Mike", "Chan", 4),
("Ashley", "Rodriguez", 2),
("Kevin", "Tupik", 8),
("Kunal","Singh", 5),
("Malia","Brown", 7),
("Sarah","Lourd", 5),
("Tom", "Allen", 8),
("Lex", "Luger", 2),
("Michael", "Jordan", 4);