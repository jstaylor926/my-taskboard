import * as React from 'react';
import styles from './notesStyles.module.css';

interface CreateNoteProps {
    subject: string;
    note: string;
    formSubmit: any;
    onChange: any;
}

const CreateNote = ({subject, note, formSubmit, onChange}: CreateNoteProps) => {
    return (
         <div className={styles.createContainer}>
                <form onSubmit={formSubmit}>
                <div className={styles.subjectContainer}>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" value={subject}  />
                    </div>
                    <div className={styles.textContainer}>
                        <label htmlFor="text">Note:</label>
                       <textarea name="note" id="rows" cols={30} rows={10} value={note} onChange={onChange} />
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