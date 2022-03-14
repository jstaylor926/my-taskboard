import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {TaskStateProvider} from "../components/Tasks/state/context";
import {DndProvider} from "react-dnd";
import {HTML5Backend as Backend} from "react-dnd-html5-backend";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <DndProvider backend={Backend}>
            <TaskStateProvider>
                <Component {...pageProps} />
            </TaskStateProvider>
        </DndProvider>
    )
}

export default MyApp
