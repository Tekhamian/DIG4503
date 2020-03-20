
class NameSearch extends React.Component {

    nameSearchFormSubmit = () => {

        // Get the input's value
        let name = document.querySelector('#nameSearch').value;

        // Test if name is an empty string
        // If so, change it to a value
        if(name.length === 0) {
            name = "0";
        }

        // Look for characters based on their name
        fetch("/api/pokemon/name/" + name)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Characters by their Name:</h2>
                <input 
                    type="text" 
                    id="nameSearch" 
                    // onKeyUp={this.nameSearchFormSubmit} 
                />
                 <button onKeyUp={this.nameSearchFormSubmit}>SUBMIT</button>
            </div>
        );
    }

}

export default NameSearch;