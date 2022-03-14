import { nanoid } from 'nanoid';
import * as React from 'react';
import { NoteList, Note } from '../noteTypes';
import { NoteAction } from './actions';

export type NoteState = {
    data: NoteList[]
}



const initialState = {
    isLoading: false,
    isError: false,
    data: []
}


export const noteReducer = (
    draft: NoteState,
    action: NoteAction
): NoteState | void => {
    switch (action.type) {
        case "ADD_LIST": {
            draft.data.push({
                id: nanoid(),
                title: action.payload,
                notes: []
            })
            break;
        }
        case "ADD_NOTE":
            const {title, text, noteId} = action.payload;
            // const targetListIndex = findItemIndexById(draft.lists, )
    }
}