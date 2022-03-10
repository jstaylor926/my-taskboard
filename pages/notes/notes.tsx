import React from 'react'
import AddNewNote from '../../components/Notes/AddNewNote';
import {useAppState} from "../../components/Notes/state/context";
import Column from "../../components/UI/Column";
import styles from './notes.module.css';

const Notes = () => {
    const { notes } = useAppState()

    return (
        <div className={styles.notes}>
            <h1>Add Note</h1>
           
        </div >
    )
}

export default Notes