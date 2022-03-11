import * as React from 'react';
import styles from './notes.module.css'


export default function CreateNote() {
    const [createNote, setCreateNote] = React.useState(false);

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
        <div className={styles.createBtn}>
            <button onClick={() => console.log('hi')}>
                Create
            </button>
        </div>       
        </div>
    )
}