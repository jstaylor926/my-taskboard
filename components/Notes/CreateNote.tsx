import * as React from 'react';
import styles from './notesStyles.module.css';

interface CreateNoteProps {
    subject: string;
    note: string;
    formSubmit: any;
}

const CreateNote = ({subject, note, formSubmit}: CreateNoteProps) => {
    return (
         <div className={styles.createContainer}>
                <form onSubmit={formSubmit}>
                <div className={styles.subjectContainer}>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" value={subject}  />
                    </div>
                    <div className={styles.textContainer}>
                        <label htmlFor="text">Note:</label>
                        <input type="text" value={note}  />
                    </div>
                    <div className={styles.submitBtn}>
                        <button type='submit'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default CreateNote;