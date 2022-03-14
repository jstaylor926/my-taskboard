import {TaskState} from "../../components/Tasks/state/reducers";

export const save = (payload: TaskState) => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Error while saving state')
        }
    })
}
export const load = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
        (response) => {
            if (response.ok) {
                return response.json() as Promise<TaskState>
            } else {
                throw new Error("Error while loading the state.")
            }
        }
    )
}