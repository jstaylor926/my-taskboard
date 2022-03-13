import * as React from 'react';
import styles from './notesStyles.module.css';

interface CreateNoteProps {
    onCreate: any;
}

const CreateNote = ({}: CreateNoteProps) => {
    const [subject, setSubject] = React.useState('');
    const [note, setNote] = React.useState('');

    return (
         <div className={styles.createContainer}>
                <form>
                <div className={styles.subjectContainer}>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" value={subject} onChange={(e) => console.log(e.target.value)}  />
                    </div>
                    <div className={styles.textContainer}>
                        <label htmlFor="text">Note:</label>
                       <textarea name="note" id="rows" cols={30} rows={10} value={note} onChange={(e) => console.log(e.target.value)} />
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