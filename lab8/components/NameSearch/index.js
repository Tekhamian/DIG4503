
class NameSearch extends React.Component {
    // Name Section
     readName(event) {

    // Stop (prevent) the 'default' form action
    event.preventDefault();

    // Find the element with 'id="name"'
    let element = document.querySelector("#name");

      // Look for movies based on the name
      fetch("/api/pokemon/name/" + element.value)
      .then((res) => { return res.json() })
      .then((processed) => {
       
          // Call the callback function given to the class component
          this.props.callback(processed);
         
      });
        
      
           // Find the element with 'id="reportingArea"'
           let reporting = document.querySelector("#reportingArea");
            
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


// class NameSearch extends React.Component {

//     nameSearch = () => {

//         // Get the input's value
//         let name = document.querySelector('#nameSearch').value;

//         // Test if name is an empty string
//         // If so, change it to a value
//         if(name.length === 0) {
//             name = "0";
//         }

//         // Look for movies based on the name
//         fetch("http://localhost:80/movies/year/" + name.value)
//         .then((res) => { return res.json() })
//         .then((processed) => {
//             // Call the callback function given to the class component
//             this.props.callback(processed);
//         });

//     }

//     render() {
//         return(
//             <div>
//                 <h2>Search for Movies by their Name:</h2>
//                 <input 
//                     type="text" 
//                     id="nameSearch" 
//                     onKeyUp={this.nameSearch} 
//                 />
//             </div>
//         );
//     }

// }

// export default NameSearch;