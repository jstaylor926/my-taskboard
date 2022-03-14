import React from 'react'
import { NoteList } from './noteTypes'
import {useNoteState} from './state/context';
import Note from './Note';

interface NoteDisplayProps {
    data?: NoteList[];
    id?: any;
}

function NoteDisplay({data, id}: NoteDisplayProps) {
const {getNoteById} = useNoteState();

const notes = getNoteById(id)
console.log(data)
  return (
    <div>
        <div>
            {/* <span>{notes}</span> */}
        </div>
        <div>
            { data?.map((note) => (
                <div key={note.id}>
                    <span>
                        {note.title}
                    </span>
                    <div>
                        {
                            note?.notes.map((text) => (
                                <Note title={text.title} note={text.text} id={text.id} key={text.id} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}



export default NoteDisplay