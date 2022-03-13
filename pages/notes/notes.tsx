import React from 'react'
import styles from './notes.module.css';
import MainButton from "../../components/Notes/MainButton";
import { RoutePath} from "../links";
import CreateNote from "../../components/Notes/CreateNote";
import Link from "next/link";
import MainNavbar from "../../components/UI/MainNavbar";



const Notes = () => {

    return (
        <div className={styles.notes}>
           <MainNavbar />
           <div className={styles.notesHeader}>
               <h1>Notes Page</h1>
           </div>
            <div className={styles.decision}>
                <div className={styles.decisionRow}>
                <div className={styles.rowContent}>
                    <MainButton path={RoutePath.VIEW_NOTE} decision='View Notes' />
                </div>
                    <div className={styles.rowContent}>
                        <MainButton path={RoutePath.CREATE_NOTE} decision='Create Notes' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notes