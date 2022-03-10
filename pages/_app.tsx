import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {NoteStateProvider} from "../components/Notes/state/context";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <NoteStateProvider>
            <Component {...pageProps} />
        </NoteStateProvider>
    )
}

export default MyApp
