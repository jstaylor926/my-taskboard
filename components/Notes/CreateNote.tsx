import * as React from 'react'
import { Note } from './noteTypes';
import {useFocus} from '../../utils/useFocus';
type CreateNoteProps = {
    onAdd(text: string): void;
}
function CreateNote({onAdd}: CreateNoteProps) {
    const [text, setText] = React.useState('');
    const inputRef = useFocus();

  return (
    <div>
        <div>
            <span>Create Note</span>
        </div>
        <div>
            <textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                ref={inputRef}
            />
        </div>
        <div>
            <button onClick={() => onAdd(text)}>
                Create
            </button>
        </div>
    </div>
  )
}

export default CreateNote