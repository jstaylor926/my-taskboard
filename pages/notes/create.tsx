import * as React from 'react';
import styles from './notes.module.css'
import type { NextPage } from 'next'
import CreateNote from '../../components/Notes/CreateNote';


const CreateNotePage = () =>{
    const [createNote, setCreateNote] = React.useState(false);

    if( createNote ){
        return <div>Hi</div>
    }

    return (
        <div className={styles.createNote}>
            <div className={styles.notesHeader}>
                <span>Create a note</span>
            </div>
            <div className={styles.oldNotes}>
                <div>
                    <p>Did you already write the note you are taking?</p>
                    <div className={styles.noteSearch}>
                        <p>Create a section to search through notes</p>
                    </div>
                </div>
            </div>
            {/* <CreateNote subject='' note='' formSubmit={} onChange={}/> */}
        <div className={styles.createBtn}>
            <button onClick={() => setCreateNote(true)}>
                Create New Note
            </button>
        </div>       
        </div>
    )
}

export default CreateNotePage;