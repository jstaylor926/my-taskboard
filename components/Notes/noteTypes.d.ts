import * as React from 'react';

export type Note = {
    title?: string;
    id: string | undefined;
    text: string;
}

export type NoteList = {
    id?: string;
    title?: string;
    notes: Note[]
}