import { createContext, useContext, Dispatch, FC, useEffect } from "react"
import {
    taskStateReducer,
    TaskState,
    Task,
    List
} from "./reducers";
import {DragItem} from "../DragItem";
import { TaskAction } from './actions'
import { useImmerReducer } from "use-immer";
import {withInitialState} from '../../../utils/withInitialState'
import { save } from '../../../pages/api/api';

type TaskStateContextProps = {
    draggedItem: DragItem | null;
    lists: List[];
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<TaskAction>
}

const TaskStateContext = createContext<TaskStateContextProps>(
    {} as TaskStateContextProps
)

const taskData: TaskState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

type TaskStateProviderProps = {
    children: React.ReactNode;
    initialState: TaskState;
}

export const TaskStateProvider = withInitialState<TaskStateProviderProps>(
    ({ children, initialState }) => {
        const [state, dispatch] = useImmerReducer(
            taskStateReducer,
            initialState
        )
        useEffect(() => {
            save(state)
        }, [state])
        const {draggedItem, lists} = state;
        const getTasksByListId = (id: string) => {
            return lists.find((list) => list.id === id)?.tasks || []
        }
        return (
            <TaskStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch}}>
                {children}
            </TaskStateContext.Provider>
        )
    }
)

export const useTaskState = () => {
    return useContext(TaskStateContext)
}
