import * as React from 'react';
import styles from './notes.module.css'
import type { NextPage } from 'next'
import MainNavbar from "../../components/UI/MainNavbar";

const CreateNotePage: NextPage = () =>{
    const [createNote, setCreateNote] = React.useState(false);

    if( createNote ) {
        return <h1>Hi</h1>
    }
    return (
        <div className={styles.createNote}>
            <MainNavbar />
            <div className={styles.createContainer}>

            </div>
        </div>
    )
}

export default CreateNotePage;