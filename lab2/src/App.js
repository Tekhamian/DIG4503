import React from 'react';
//import .logo512.png;
import './App.css';
//connection to homepage
import HomePage from "./components/HomePage";
class App extends React.Component {
  render(){
    return(
      <HomePage firstName = "Robert"/>
    );
  }
}

export default App;
