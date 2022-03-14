import * as React from 'react'
import CreateNote from './CreateNote';

type AddNewNoteProps = {
    onAdd(text: string): void;

}

function AddNewNote({onAdd}: AddNewNoteProps) {
    const [showCreateNote, setShowCreateNote] = React.useState(false);
    
    if(showCreateNote) {
        return (
            <CreateNote 
                onAdd={(text) => {
                    onAdd(text)
                    setShowCreateNote(false)
                }}
            />
        )
    }
  return (
    <div>
        <button onClick={() => setShowCreateNote(true)}>
                Add a new note
        </button>
    </div>
  )
}

export default AddNewNote