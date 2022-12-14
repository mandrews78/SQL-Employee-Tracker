const db = require("./db/connection");
const express = require("express");
const employeeTracker = require("./lib/departments");
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('You are connected to the database.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        employeeTracker();
    });
});