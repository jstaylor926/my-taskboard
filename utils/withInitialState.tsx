import * as React from 'react';
import { TaskState} from "../components/Tasks/state/reducers";
import {load} from '../pages/api/api';

type InjectedProps = {
    initialState: TaskState
}

type PropsWithoutInject<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export function withInitialState<TProps>(
    WrapperComponent: React.ComponentType<PropsWithoutInject<TProps> & InjectedProps>
) {
    return(props: PropsWithoutInject<TProps>) => {
        const [initialState, setInitialSate] = React.useState<TaskState>({
            lists: [],
            draggedItem: null
        })
        const [isLoading, setIsLoading] = React.useState(true);
        const [error, setError] = React.useState<Error | undefined>();

        React.useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    const data = await load()
                    setInitialSate(data)
                } catch (e) {
                    if(e instanceof Error) {
                        setError(e)
                    }
                }
                setIsLoading(false)
            }
            fetchInitialState()
        }, [])
        if(isLoading) {
            return <div>Loading...</div>
        }
        if(error) {
            return <div>{error.message}</div>
        }
        return <WrapperComponent {...props} initialState={initialState} />
    }
}