import * as React from 'react';
import { NewNoteButton, NewNoteFormContainer, NewNoteContent, NewNoteInput } from "./styles";
import { useFocus } from '../../utils/useFocus';
import styles from './notesStyles.module.css';
type NewNoteFormProps = {
    onAdd: React.FormEventHandler<HTMLFormElement>
}

export const NewNoteForm = ({ onAdd }: NewNoteFormProps) => {
    const [subject, setSubject] = React.useState('');
    const [note, setNote] = React.useState('');

    const inputRef = useFocus();


    return (
        <div className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="subject">Subject:</label>
                    <input 
                        type="text" 
                        ref={inputRef} 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                    />
                </div>
        </div>
        // <NewNoteFormContainer>
        //     <NewNoteInput
        //         ref={inputRef}
        //         onChange={(e) => setText(e.target.value)} value={text}
        //     />
        //     <NewNoteContent

        //     />
        //     <NewNoteButton onClick={() => onAdd(text)}>
        //         Create
        //     </NewNoteButton>
        // </NewNoteFormContainer>
    )
}

export default NewNoteForm;