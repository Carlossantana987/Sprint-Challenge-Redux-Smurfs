import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import CreateSmurfForm from "./CreateSmurfForm";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <CreateSmurfForm />
      </div>
    );
  }
}

export default App;
