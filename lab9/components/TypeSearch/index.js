import styles from "./StyleComponents/module.css";

class TypeSearch extends React.Component {
    // Type Section
     readType(event) {

    // Stop (prevent) the 'default' form action
    event.preventDefault();

    // Find the element with 'id="type"'
    let element = document.querySelector("#type");

      // Look for characters based on the type
      fetch("/api/pokemon/type/" + element.value)
      .then((res) => { return res.json() })
      .then((processed) => {
       
       // Find the element with 'id="displayArea"'
       let reporting = document.querySelector("#displayArea");

       // Does the 'processed' object have a property called 'error'?
       if(processed.error) {
           reporting.innerHTML = processed.error;
       } else {
           reporting.innerHTML = processed.type;
           }

       });

       element.value ="";
   }


        render() {
            return(
                <div>
                    <label className={styles.xlargeText}>TYPE</label>
                    {/* The previous onSubmit attribute should be set to the readType function using JSX */}

                    <form onSubmit={this.readType}>
                        {/* ... input element w/ text input &... */}
                        <input type="text" id="type" name="type" placeholder="Enter Type.."/>
                        {/* ...button element for submition */}
                        <button className={styles.btn}>SUBMIT</button>
                    </form>  
                </div>
            );
            
        }
}

export default TypeSearch;


// class TypeSearch extends React.Component {

//     typeSearch = () => {

//         // Get the input's value
//         let type = document.querySelector('#typeSearch').value;

//         // Test if type is an empty string
//         // If so, change it to a value
//         if(type.length === 0) {
//             type = "0";
//         }

//         // Look for characters based on the type
//         fetch("http://localhost:80/characters/year/" + type.value)
//         .then((res) => { return res.json() })
//         .then((processed) => {
//             // Call the callback function given to the class component
//             this.props.callback(processed);
//         });

//     }

//     render() {
//         return(
//             <div>
//                 <h2>Search for Characters by their Type:</h2>
//                 <input 
//                     type="text" 
//                     id="typeSearch" 
//                     onKeyUp={this.typeSearch} 
//                 />
//             </div>
//         );
//     }

// }

// export default TypeSearch;