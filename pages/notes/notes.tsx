import React from 'react'
import styles from './notes.module.css';
import MainButton from "../../components/Notes/MainButton";

const Notes = () => {

    return (
        <div className={styles.notes}>
           <div className={styles.notesHeader}>
               <h1>Notes Page</h1>
           </div>
            <div className={styles.decision}>
                <div className={styles.decisionRow}>
                <div className={styles.left}>
                    <MainButton path='view' decision='View Notes' />
                </div>
                    <div className={styles.right}>
                        <MainButton path='create' decision='Create Notes' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notes