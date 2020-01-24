import React from 'react'; // first step everytime you create file in react 
import './index.css';// this is the css file that will control the look of the site 
// make sure the class name matches the folder name (below)
class HomePageTitle extends React.Component {
    render(){
        return (
             <div>
                <h1 className="HomePageTitle">This Is A Test...! 123!!!</h1>
             </div>
        );
    }
}
export default HomePageTitle;