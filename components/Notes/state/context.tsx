import * as React from 'react';


type NoteContextProps = {
    data: Category[];
    getNoteById(id: string | number): Category[];
}

const NoteStateContext = React.createContext<NoteContextProps>(
    {} as NoteContextProps
)
type Note = {
    id: string | number;
    title: string;
    // date?: Date;
    text: string;
}

type Category = {
    id: string | number;
    category: string;
    notes: Note[];
}

export type NoteState = {
    data: Category[];
}


const noteData: NoteState = {
    data: [
        {
            id: '0',
            category: 'Tech Stuff',
            notes: [{
                id: 'a0',
                title: 'Note one',
                text: 'this is the first note I write'
            }]
        },
        {
            id: '1',
            category: 'Random',
            notes: [{
                id: 'a1',
                title: 'Note two',
                text: 'this is the second note I am writing'
            }]
        }
    ]
}

// export const NoteProvider: React.FC = ({children}) => {
//     const { data } = noteData;
//
//     const getNoteById = (id: string) => {
//         return data.find((category) => category.id === id)?.notes || []
//     }
//     return (
//         <NoteStateContext.Provider value={{data, getNoteById}}>
//             {children}
//         </NoteStateContext.Provider>
//     )
// }
//
