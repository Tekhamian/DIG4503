import React from 'react';
//import .logo512.png;
import './App.css';
//connection to homepage
import HomePage from "./components/HomePage";

class App extends React.Component {
  render(){
    return(
      <HomePage firstName = "Billy Blanco"/>
    );
  }
}


//****** Original Code found in App.js initially (Mutted)******//
//function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
