const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  // console.log(req.body);
  const Name = req.body.Name;
  const Age = req.body.Age;
  const Country = req.body.Country;
  const Position = req.body.Position;
  const Salary = req.body.Salary;

  db.query(
    "INSERT INTO employees (Name, Age, Country, Position, Salary) VALUES (?, ?, ?, ?, ?)",
    [Name, Age, Country, Position, Salary],
    (err, result) => {
      if (err) {
        return res.send(err);
        // console.log(err);
        // return res.send(err);
      } else {
        res.send("Values Inserted :)");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
