import * as React from 'react';
import MainNavbar from "../../components/UI/MainNavbar";
import styles from './notes.module.css';
import {NextPage} from "next";

const ViewNotePage: NextPage = () => {
    return (
        <div className={styles.viewNotes}>
            <h1>View Notes</h1>
            <MainNavbar />
        </div>
    )
}

export default ViewNotePage;