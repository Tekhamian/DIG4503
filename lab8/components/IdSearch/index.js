class IdSearch extends React.Component {

    idSearchFormSubmit = () => {

        // Get the input's value
        let id = document.querySelector('#idSearch').value;

        // Test if id is an empty string
        // If so, change it to a value
        if(id.length === 0) {
            id = "0";
        }

        // Look for characters based on their id
        fetch("/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Characters by their Id:</h2>
                <input 
                    type="text" 
                    id="idSearch" 
                    // onKeyUp={this.idSearchFormSubmit} 
                />
                 <button onKeyUp={this.idSearchFormSubmit}>SUBMIT</button>
            </div>
        );
    }

}

export default IdSearch;