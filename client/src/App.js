import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [Country, setCountry] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      Name: Name,
      Age: Age,
      Country: Country,
      Position: Position,
      Salary: Salary,
    }).then(() => {
      console.log("success");
    });
  };

  // const displayInfo = () => {
  //   console.log(
  //     Name + " " + Age + " " + Country + " " + Position + " " + Salary
  //   );
  // };

  return (
    <div className="App">
      <div className="information">
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country: </label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position: </label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Salary (year) : </label>
        <input
          type="number"
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
