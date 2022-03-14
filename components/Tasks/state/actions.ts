export type TaskAction =
    | {
    type: "ADD_LIST"
    payload: string
}
    | {
    type: "ADD_TASK"
    payload: { text: string; listId: string }
}
    | {
    type: "MOVE_LIST"
    payload: {
        draggedId: string
        hoverId: string
    }
}

export const addTask = (text: string, listId: string): TaskAction => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
})

export const addList = (text: string): TaskAction => ({
    type: "ADD_LIST",
    payload: text
})

export const moveList = (
    draggedId: string,
    hoverId: string
): TaskAction => ({
    type: "MOVE_LIST",
    payload: {
        draggedId,
        hoverId
    }
})
