import React from 'react'; // first step everytime you create file in react 
import HomePageTitle from "../HomePageTitle";
import './index.css';// this is the css file that will control the look of the site 
// make sure the class name matches the folder name (below)
class HomePage extends React.Component {
    render(){
        return (
             <div>
                <p className="HomePage">{this.props.firstName}</p>
                <HomePageTitle></HomePageTitle>
             </div>
        );
    }
}
export default HomePage;