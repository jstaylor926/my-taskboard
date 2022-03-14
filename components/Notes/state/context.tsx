import * as React from 'react';
import { NoteList, Note } from '../noteTypes';
import { noteReducer, NoteState } from './reducer';
import {NoteAction} from './actions';

type NoteContextProps = {
    data: NoteList[];
    getNoteById(id: string | number): Note[];
}

const NoteContext = React.createContext<NoteContextProps>(
    {} as NoteContextProps
)

const notesData: NoteState = {
    data: [
        {
            id: 'a',
            title: 'First Note',
            notes: [{ id: 'a1', text: 'This is the first note that I am making', title: 'Title One' }]
        },
        {
            id: 'b',
            title: 'Second Note',
            notes: [
                { 
                    id: 'b1', 
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quam quia illo quidem hic blanditiis quasi illum eius voluptates.", 
                    title: 'Title One' 
                },
                {
                    id: 'b2',
                    text: 'second note, second box',
                    title: 'Title Two - Box Two'
                }
            ]
        }
    ]
}
export const NoteStateProvider: React.FC = ({ children }) => {
    const { data } = notesData;

    const getNoteById = (id: any) => {
        return data.find((note) => note.id === id)?.notes || []
    }
    return (
        <NoteContext.Provider value={{ data, getNoteById }}>
            {children}
        </NoteContext.Provider>
    )
}

export const useNoteState = () => {
    return React.useContext(NoteContext)
}
