import * as React from 'react';

type AddNewNoteProps = {
    handleCreateNote: any;
}

const AddNewNote = ({handleCreateNote}: any) => {
    const [createNote, setCreateNote] = React.useState(false);
  
    return (
        <div>
            <button onClick={handleCreateNote}>
                Create
            </button>
        </div>
    )
}

export default AddNewNote;
