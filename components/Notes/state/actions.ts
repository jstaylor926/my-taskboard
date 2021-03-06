export type NoteAction = |{
    type: "ADD_LIST";
    payload: string;
}
|{
    type: "ADD_NOTE"
    payload: {
        title: string;
        noteId: string;
        text: string;
    }
}
|{
    type: "MOVE_LIST";
    payload: {
        draggedId: string;
        hoverId: string;
    }
}

export const addNote = (title: string, text: string, noteId: string): NoteAction => ({
    type: "ADD_NOTE",
    payload: {
        text,
        title,
        noteId
    }
})

export const addList = (text: string): NoteAction => ({
    type: "ADD_LIST",
    payload: text
})

export const moveList = (
    draggedId: string,
    hoverId: string
): NoteAction => ({
    type: "MOVE_LIST",
    payload: {
        draggedId,
        hoverId
    }
})