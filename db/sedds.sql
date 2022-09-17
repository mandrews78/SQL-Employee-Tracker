USE org_db;
INSERT INTO departments (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");
INSERT INTO roles (title, department_id, salary)
VALUES
("Sales Lead", 1, 100000),
("Salesperson", 1, 80000),
("Lead Engineer", 2, 150000),
("Software Engineer", 2, 120000),
("Account Manager", 3, 160000),
("Account", 3, 125000),
("Legal Team Lead", 4, 250000),
("Lawyer", 4, 190000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, null),
("Mike", "Chan", 1, 1),
("Ashley", "Rodriguez", 2, null),
("Kevin", "Tupik", 2, 3),
("Kunal","Singh", 3, null),
("Malia","Brown", 3, 5),
("Sarah","Lourd", 4, null),
("Tom", "Allen", 4, 7);