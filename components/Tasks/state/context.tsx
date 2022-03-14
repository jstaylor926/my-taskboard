import { createContext, useContext, Dispatch, FC } from "react"
import {
    taskStateReducer,
    TaskState,
    Task,
    List
} from "./reducers";
import { TaskAction } from './actions'
import { useImmerReducer } from "use-immer";

type TaskStateContextProps = {
    lists: List[];
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<TaskAction>
}

const TaskStateContext = createContext<TaskStateContextProps>(
    {} as TaskStateContextProps
)

const taskData: TaskState = {
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

export const TaskStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(taskStateReducer, taskData)

    const { lists } = state
    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <TaskStateContext.Provider
            value={{ lists, getTasksByListId, dispatch }}
        >
            {children}
        </TaskStateContext.Provider>
    )
}

export const useTaskState = () => {
    return useContext(TaskStateContext)
}
