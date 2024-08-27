import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([])
  const [formState, setformState] = useState({
    name: "",
    age: "",
    car: "",
    agree: "",
  });
  const { name, age, car, agree } = formState;
  function handleSubmit(e){
    e.preventDefault();
    setData(function(){
      return [...data, formState]
    });
    setformState({
      name: "",
      age: "",
      car: "",
      agree: "",
    });
    
  console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <label>
            Name:
            <input placeholder="Name" type="text" name="name" value={name} onChange={(e) => setformState({...formState, name: e.target.value})}/>
          </label>
          <label>
            Age:
            <input placeholder="Name" type="number" name="age" value={age} onChange={(e) => setformState({...formState, age: +e.target.value})}/>
          </label>
          <label>
            Select your car:
            <select value={car} name="car" onChange={(e) => setformState({...formState, car: e.target.value})}>
              <option value="">Select</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <label>
            Are you sure you want to submit?
            <input name="agree" type="checkbox" checked={agree} onChange={(e) => setformState({...formState, agree: e.target.checked})}/>
          </label>
          
          <input type="submit" value="Submit" />
        </div>
      </form>
      
    </>
  );
}

export default App;
