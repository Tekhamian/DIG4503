
class NameSearch extends React.Component {
    // Name Section
     readName(event) {

    // Stop (prevent) the 'default' form action
    event.preventDefault();

    // Find the element with 'id="name"'
    let element = document.querySelector("#name");

    fetch("/api/pokemon/name/" + element.value).then((res) => {
        // Parse the string into a JavaScript object and return it
        return res.json();
        }) .then((processed) => {
        
        // Find the element with 'id="reportingArea"'
        let reporting = document.querySelector("#reportingArea");

        // Does the 'processed' object have a property called 'error'?
        if(processed.error) {
            reporting.innerHTML = processed.error;
        } else {
            reporting.innerHTML = processed.id;
            }

        });
        
        element.value ="";
        }

        render() {
            return(
                <div>
                    <label ><h2>NAME</h2></label>
                    {/* The previous onSubmit attribute should be set to the readName function using JSX */}

                    <form onSubmit={this.readName}>
                        {/* ... input element w/ text input &... */}
                        <input type="text" id="name" name="name" placeholder="Enter Name.."/>
                        {/* ...button element for submition */}
                        <button>SUBMIT</button>
                    </form>  
                </div>
            );
            
        }
}

export default NameSearch;
