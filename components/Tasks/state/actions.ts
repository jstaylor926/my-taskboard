import { DragItem } from '../DragItem';


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
    | {
    type: "SET_DRAGGED_ITEM"
    payload: DragItem | null
}
    | {
    type: "MOVE_TASK"
    payload: {
        draggedItemId: string
        hoveredItemId: string | null
        sourceColumnId: string
        targetColumnId: string
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

export const setDraggedItem = (
    draggedItem: DragItem | null
): TaskAction => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})

export const moveTask = (
    draggedItemId: string,
    hoveredItemId: string | null,
    sourceColumnId: string,
    targetColumnId: string
): TaskAction => ({
    type: "MOVE_TASK",
    payload: {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId
    }
})
