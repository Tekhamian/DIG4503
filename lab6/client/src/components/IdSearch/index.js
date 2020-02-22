import React from "react";
class IdSearch extends React.Component {
    
    //ID Section
    readId(event) {

        // (prevent) Stop the 'default' form action
        event.preventDefault();

        // Find the element with 'id="id"'
        let element = document.querySelector("#id");

        fetch("http://localhost:80/id/" + element.value).then((res) => {
            // Parse the string into a JavaScript object and return it
            return res.json();
            }) .then((processed) => {
            
            // Find the element with 'id="reportingArea"'
            let reporting = document.querySelector("#reportingArea");

            // Does the 'processed' object have a property called 'error'?
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
                }

            });

            element.value ="";
        }

        render() {
            return(
                <div>
                    <div className="l1">
                        <label>LAB 6</label>
                        <hr/>
                    </div>                    
                    <label><h2>ID</h2></label>
                    {/* The previous onSubmit attribute should be set to the readId function using JSX */}
                    <form onSubmit={this.readId}>
                         {/* ... input element w/ text input &... */}
                        <input type="text" id="id" name="id" placeholder="Enter ID.."/>
                        {/* ...button element for submition */}
                        <button >SUBMIT</button>
                    </form>
                </div>
            );

        }

}
export default IdSearch;
