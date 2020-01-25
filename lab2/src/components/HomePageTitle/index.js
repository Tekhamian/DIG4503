import React from 'react'; // first step everytime you create file in react 
import './test.css';// this is the css file that will control the look of the site 
// make sure the class name matches the folder name (below)
class HomePageTitle extends React.Component {
    //render is the visual tool that displays stuff onscreen/ browser
    render(){
        return (
             <div >
                <h1 className="style2">This Is A Test...! 123!!!</h1>
             </div>
        );
    }
}
export default HomePageTitle;