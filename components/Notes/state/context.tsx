import {createContext, FC, useContext} from "react";

type Note = {
    id: string;
    text: string;
    subject?: string;
}

type List = {
    id: string;
    text: string;
    notes: Note[];
}

export type NoteState = {
    notes: List[];
}

const noteData: NoteState = {
    notes: [
        {
            id: 'n1',
            text: 'This is my first note in the notebook project I am making',
            notes: [{id: '1', subject: 'Subject One', text: 'Where does this text get displayed'}]
        }
    ]
}

type NoteStateContextProps = {
    notes: List[];
    getNotesByListId(id: string): Note[];
}

const NoteStateContext = createContext<NoteStateContextProps>({} as NoteStateContextProps)

export const NoteStateProvider: FC = ({children}) => {
    const { notes } = noteData;

    const getNotesByListId = (id: string) => {
        return notes.find((list) => list.id === id)?.notes || []
    }
    return (
        <NoteStateContext.Provider value={{notes, getNotesByListId}}>
            {children}
        </NoteStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(NoteStateContext)
}