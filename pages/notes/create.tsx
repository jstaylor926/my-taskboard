import * as React from 'react';
import styles from './notes.module.css'
import type { NextPage } from 'next'
import MainNavbar from "../../components/UI/MainNavbar";
import CreateNote from "../../components/Notes/CreateNote";

const CreateNotePage: NextPage = () =>{
    return (
        <div className={styles.createNotePage}>
            <div>
                <span>CREATE A NEW NOTE</span>
            </div>
            <div className={styles.createNoteForm}>
                
            </div>
        </div> 
    )
}

export default CreateNotePage;