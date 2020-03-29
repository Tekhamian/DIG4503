import styles from "./StyleComponents/module.css";

class IdSearch extends React.Component {
 //ID Section
 readId(event) {

    // (prevent) Stop the 'default' form action
    event.preventDefault();

    // Find the element with 'id="id"'
    let element = document.querySelector("#id");

    fetch("/api/pokemon/id/" + element.value)
    .then((res) => {return res.json();}) 
    .then((processed) => {
        
        // Find the element with 'className="displayArea"'
        let reporting = document.querySelector(".displayArea");

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
                <div className={styles.labelOne}>
                    <label>LAB 8</label>
                    <hr/>
                </div>                    
                <label className={styles.xlargeText}>ID</label>
                {/* The previous onSubmit attribute should be set to the readId function using JSX */}
                <form onSubmit={this.readId}>
                     {/* ... input element w/ text input &... */}
                    <input type="text" id="id" name="id" placeholder="Enter ID.."/>
                    {/* ...button element for submition */}
                    <button className={styles.btn} >SUBMIT</button>
                </form>
            </div>
        );

    }

}
export default IdSearch;