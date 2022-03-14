import {CardDragItem, ColumnDragItem, DragItem} from "../components/Tasks/DragItem"

export const isHidden = (
    isPreview: CardDragItem | ColumnDragItem | null,
    draggedItem: string,
    itemType: string,
    id: undefined | boolean
): boolean => {
    return Boolean(
        !isPreview &&
        draggedItem &&
        draggedItem.type === itemType &&
        draggedItem.id === id
    )
}
