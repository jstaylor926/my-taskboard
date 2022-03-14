import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {TaskStateProvider} from "../components/Tasks/state/context";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <TaskStateProvider>
            <Component {...pageProps} />
        </TaskStateProvider>
    )
}

export default MyApp
