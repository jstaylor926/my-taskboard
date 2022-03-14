import { useDrag} from "react-dnd";
import { useTaskState} from "../components/Tasks/state/context";
import { DragItem} from "../components/Tasks/DragItem";
import { setDraggedItem} from "../components/Tasks/state/actions";
import {getEmptyImage} from "react-dnd-html5-backend";
import {useEffect} from "react";

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useTaskState();
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true})
    }, [preview])
    return { drag }
}