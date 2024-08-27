import React, { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    class: "",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //add fetch data  using post method and  using  this json link "http://localhost:5000/users" to updata data in database

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({
          name: "",
          rollNo: "",
          class: "",
          section: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <td> Student Name : </td>
              <td>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td> Student rollNo No : </td>
              <td>
                <input
                  type="text"
                  name="rollNo"
                  required
                  value={formData.rollNo}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td> Student Class : </td>
              <td>
                <input
                  type="text"
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td> Student Section : </td>
              <td>
                <select
                  name="section"
                  required
                  value={formData.section}
                  onChange={handleChange}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </td>
            </tr>
          </thead>
        </table>
        <button type="submit">Submit</button>
        <Data fetchDataTrigger={formData} />
        
      </form>
    </>
  );
}

export default App;
