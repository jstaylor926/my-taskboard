import React from 'react'
import styles from './notes.module.css';
import MainButton from "../../components/Notes/MainButton";
import CreateNote from "../../components/Notes/CreateNote";
import {useNoteState} from "../../components/Notes/state/context";

const Notes = () => {
    const { notes } = useNoteState();
    return (
        <div className={styles.notes}>
           <div className={styles.notesHeader}>
               <h1>Notes Page</h1>
           </div>
            <div className={styles.decision}>
                <div className={styles.decisionRow}>
                <div className={styles.rowContent}>
                    <MainButton path='view' decision='View Notes' />
                </div>
                    <div className={styles.rowContent}>
                        <MainButton path='create' decision='Create Notes' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notes