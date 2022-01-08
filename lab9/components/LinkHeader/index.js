import Styles from '../Style.module.css';
import Link from 'next/link';


function LinkHeader() {
    return (
        <div className={Styles.wrapper}>
            <Link href="/id">
                <a className={Styles.navLink}>ID</a>
            </Link>
            <Link href="/name">
                <a className={Styles.navLink}>NAME</a>
            </Link>
            <Link href="/type">
                <a className={Styles.navLink}>TYPE</a>
            </Link>
            <Link href="/display">
                <a className={Styles.navLink}></a>
            </Link>
            
        </div>
    );
    
}

export default LinkHeader;