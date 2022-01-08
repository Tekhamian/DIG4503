import Styles from '../Style.module.css';
// EG 1
class DisplayArea extends React.Component {
    render() {
        return(
            <div key={props.number}>
            <label className={Styles.xlargeText}>SEARCH RESULTS</label>
            <h3><P className={Styles.displayArea}></P></h3>
            <h3><P className={Styles.displayArea}>ID:{props.pokemon.id}</P></h3>
            <h3><P className={Styles.displayArea}>Type:{props.pokemon.type}</P></h3>
            </div>
        );
    }
}

export default DisplayArea;


// // EG 2
// export default function DisplayArea (props) {

//     return(
//         <div key={props.number}>
//             <hr />
//             <p><strong>Name:</strong> {props.pokemon.name}</p>
//             <p><strong>ID:</strong> {props.pokemon.name}</p>
//             <p><strong>Type(s):</strong> 
//                 <ul>
//                     {
//                         props.pokemon.typeList.map((type, index) => {
//                             return(
//                                 <li key={index}> {type}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </p>
//         </div>
//     );
// }
