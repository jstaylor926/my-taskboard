import * as React from 'react';
import styles from './notes.module.css'
import type { NextPage } from 'next'
import MainNavbar from "../../components/UI/MainNavbar";
import CreateNote from "../../components/Notes/CreateNote";

const CreateNotePage: NextPage = () =>{
    const [createNote, setCreateNote] = React.useState(false);
    const [test, setTest] = React.useState('')
    const handleOnCreate = (event: any) => {
        setTest(event.target.value)
    }
    console.log(test)
    return (
        <div className={styles.createNote}>
            <MainNavbar />
            <div className={styles.createContainer}>
                <CreateNote onCreate={handleOnCreate} onChange={() => console.log('')} />
                {/*<CreateNote onCreate={(e: { target: { value: any; }; }) => console.log(e.target.value)    } />*/}
            </div>
        </div>
    )
}

export default CreateNotePage;