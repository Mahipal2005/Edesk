import React, { useState, useEffect } from "react";

function Data({ fetchDataTrigger }) {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchDataTrigger]); // Update when fetchDataTrigger changes
  function deleteUser(id) {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers); 

  }
  
  return (
    <>
      <h1>Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Student Name</td>
            <td>Student Roll No</td>
            <td>Student Class</td>
            <td>Student Section</td>
            <td>Delete Button</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.rollNo}</td>
              <td>{user.class}</td>
              <td>{user.section}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Data;
