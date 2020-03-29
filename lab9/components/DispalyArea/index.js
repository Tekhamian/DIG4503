import styles from "./StyleComponents.module.css";

class DisplayArea extends React.Component {
    render() {
        return(
            <div>
            <label className={styles.xlargeText}>SEARCH OUTPUT</label>
            <h3><div className={styles.displayArea}></div></h3>
            </div>
        );
    }
}

export default DisplayArea;
