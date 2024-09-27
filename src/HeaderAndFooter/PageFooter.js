import React from "react";
import styles from '../MainStyles.module.css';


const PageFooter = function NavBar()
{
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerText}>
                @Copyright {new Date().getFullYear()} Georgia Gwinnett College.
            </div>
        </footer>
    )
}

export default PageFooter;