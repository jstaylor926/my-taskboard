import * as React from 'react';
import { ColumnContainer, ColumnTitle } from "./styles"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"
import { useTaskState } from "./state/context"
import {addTask, moveList, moveTask, setDraggedItem} from "./state/actions"
import {useItemDrag} from "../../utils/useItemDrag";
import { throttle} from "throttle-debounce-ts";
import { useDrop } from "react-dnd";
import { isHidden } from '../../utils/isHidden';

type ColumnProps = {
    text: string
    id: string
    isPreview?: boolean
}

export const Column = ({ text, id, isPreview }: ColumnProps) => {
    const { draggedItem, getTasksByListId, dispatch } = useTaskState()
    const tasks = getTasksByListId(id)
    const ref = React.useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover: throttle(200, () => {
            if (!draggedItem) {
                return
            }
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) {
                    return
                }

                dispatch(moveList(draggedItem.id, id))
            } else {
                if (draggedItem.columnId === id) {
                    return
                }
                if (tasks.length) {
                    return
                }

                dispatch(
                    moveTask(draggedItem.id, null, draggedItem.columnId, id)
                )
                dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
            }
        })
    })

    const { drag } = useItemDrag({ type: "COLUMN", id, text })

    drag(drop(ref))

    // @ts-ignore
    return (
        <ColumnContainer
            isPreview={isPreview}
            ref={ref}
            //@ts-ignore
            isHidden={isHidden(isPreview, draggedItem, "COLUMN", id)}
        >
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => (
                <Card
                    id={task.id}
                    columnId={id}
                    text={task.text}
                    key={task.id}
                />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}
