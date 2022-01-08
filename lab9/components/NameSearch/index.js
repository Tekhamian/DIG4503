import Styles from "../Style.module.css";
import DisplayArea from "../DisplayArea";

//Name Section

class IdSearch extends React.Component { 

    // constructor for callback elements
    constructor (props){
        super (props);

        this.state = {
            searchValue: "",
            result: []
        
        };
    }

    // State controller
    changeHandler (value) {
        this.setState ({searchValue: value}
        );
    }

    async clickController() {

        let searchValue = this.state.searchValue;

        if (searchValue ==="") {
            searchValue = '~';
        }

        let response = await fetch("/api/pokemon/name/" + searchValue)
        let processed = await res.json();

        this.setState({result: processed});
           
    }

    render() {
        return(
            <div>
                <div className={Styles.labelOne}>
                    <label>LAB 9</label>
                    <hr/>
                </div>                    
                <label className={Styles.xlargeText}>Name</label>
                {/* The previous onSubmit attribute should be set to the readId function using JSX */}
                <form onSubmit={ () => {this.clickController()} }>
                     {/* ... input element w/ text input &... */}
                    <input className="userInput" type="text" id="nameSearch" name="nameSearch" placeholder="Enter Name.." 
                    onChange={(event) => { this.changeHandler(event.target.value); } } />
                    {/* ...button element for submition */}
                    <button className={Styles.btn} >SUBMIT</button>
                </form>
                {
                    this.state.result.map((pokemon, index) => { 
                        return(<DisplayArea pokemon={pokemon} number={index}/>)
                    })
                }
            </div>
        );

    }

}
export default IdSearch;