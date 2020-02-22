import React from 'react';
import './App.css';
// import './components/StyleSheets/StyleSheet.css';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';
import ReportingArea from './components/ReportingArea';

function App() {
  return (
    <section className="App">
      <IdSearch />
      <NameSearch />
      <hr/>
      <ReportingArea />
    </section>
  );
}

export default App;
