import { createContext, useContext, FC} from "react";

type NoteStateContextProps = {
    notes: NotesList[];
    getNotesByListId(id: string): Note[];
}

const NoteStateContext = createContext<NoteStateContextProps>(
    {} as NoteStateContextProps
)

type Note = {
    id: string;
    subject: string;
    note: string;
}

type NotesList = {
    id: string;
    text: string;
    notes: Note[];
}

export type NoteState = {
    notes: NotesList[];
}

const noteData: NoteState = {
    notes: [
        {
            id: '0',
            text: 'Tech Stuff',
            notes: [{
                id: 'a1',
                subject: 'Note one',
                note: 'this is the first note I write'
            }]
        },
        {
            id: '1',
            text: 'Random',
            notes: [{
                id: 'a2',
                subject: 'Note two',
                note: 'this is the second note I am writing'
            }]
        }
    ]
}

export const NoteStateProvider: FC = ({ children }) => {
    const { notes } = noteData;

    const getNotesByListId = (id: string) => {
        return notes.find((note) => note.id === id)?.notes || []
    }

    return (
        <NoteStateContext.Provider value={{notes, getNotesByListId}}>
            {children}
        </NoteStateContext.Provider>
    )
}

export const useNoteState = () => {
    return useContext(NoteStateContext)
}