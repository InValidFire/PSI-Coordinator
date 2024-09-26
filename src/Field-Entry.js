import React from "react";
import styles from "./Pages/CSS/MainStyles.module.css";

const FieldEntry = (props) =>
{
    return (
        <>
            <div className={styles.formEntry}>
                <p className={styles.formEntryName}>{props.entryName}</p>
                <input type="text" className={styles.formEntryData} value={props.entryValue}/>
            </div>
        </>
    )
}

export default FieldEntry;