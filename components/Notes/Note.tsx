import React from 'react'

interface NoteProps {
    note: string;
    title?: string;
    id: string | undefined;
}
function Note({title, note, id}: NoteProps) {
  return (
    <div id={id}>
        <div>
            Note: {title}
        </div>
        <div>
            {note}
        </div>
    </div>
  )
}

export default Note