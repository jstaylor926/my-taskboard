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
            <div className={styles.createFormContainer}>
                <form>
                    <div className={styles.categorySelect}>
                        <select>
                            <option />
                        </select>
                    </div>
                    <div className={styles.titleInput}>
                        <label htmlFor=""></label>
                        <input type="text"/>
                    </div>
                    <div className={styles.noteInput}>
                        <label htmlFor=""></label>
                        <input type="text"/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateNote;