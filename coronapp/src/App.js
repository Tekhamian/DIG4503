import React from 'react';
import Styles from './App.module.css';

// Imports from Components folder
// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Cards';
// import CountryPicker from './components/CountryPicker/Cards';

//Sorthand way of writing muliple import statements - like above - using the same route (comunicates with "./components/index.js")
import {
  Cards, 
  Charts,
  CountryPicker
} 

from './components';

import {fetchData} from  './api';


class App extends React.Component {

  // Constructor... pass data to the card below (in render)
  state = {
    data: {},
    country: '',
  }

  // Async usually go in front  of brackets for async function, but not in this case
  async componentDidMount() {
    const fetchedData = await fetchData(); 

    this.setState({ data: fetchedData});
  } 

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

     this.setState({ data: fetchedData, country: country });
      
  }

  render() {

    const {data, country} = this.state;

      return (
        <div className={Styles.entirePage}>

        <div className={Styles.cards}>
          <h1 className={Styles.text}>Global Corona Reporter</h1>
          <Cards data={data} />
        </div>
        
        <h1 className={Styles.text}>Enter Your Country's Name</h1>
        <div className={Styles.handleCountryChange}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          </div>

        <h1 className={Styles.text}>Visualization of Outbreak</h1>
        <div className={Styles.charts}>
          <Charts data={data} country={country} />
        </div>

       </div>
      )
  }
}

export default App;