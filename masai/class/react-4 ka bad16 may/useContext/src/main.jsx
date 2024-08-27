import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
export const AuthContext = React.createContext();

function Context(props){
  return (
    <AuthContext.Provider  value={{
        light:{
          background:"white",
          color:"black"
        },
        dark:{
          background:"black",
          color:"white"
        } 
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}
ReactDOM.render(
  //TODO:
  // <AuthContext.Provider value={{
  //   light:{
  //     background:"white",
  //     color:"black"
  //   },
  //   dark:{
  //     background:"black",
  //     color:"white"
  //   }
  // }}>
  //   <App />
  // </AuthContext.Provider>,
  //TODO:
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);

