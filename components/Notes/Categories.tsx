import * as React from 'react';
import Note from './Note';
import AddNewNote from './AddNewNote';
import { useNoteState } from './state/context';
import { addNote } from './state/actions';

type CategoriesProps = {
    text: string;
    id: string;
}

const Categories = ({text, id}: CategoriesProps) => {
    const {getNoteById, dispatch} = useNoteState();

    const notes = getNoteById(id);
    return (
        <div>
            <span>{text}</span>
            <div>
                {notes.map((note) => (
                    <Note title='' key={note.id} note='' id={note.id}/>
                ))}
            </div>
        </div>
    )
}

export default Categories;