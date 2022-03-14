import * as React from 'react'
import styles from './notes.module.css';
import MainNavbar from "../../components/UI/MainNavbar";
import NoteDisplay from '../../components/Notes/NoteDisplay';
import AddNewNote from '../../components/Notes/AddNewNote';
import { useNoteState } from '../../components/Notes/state/context';
import Link from 'next/link';


const Notes = () => {
    const { data } = useNoteState();
    const [notes, setNotes] = React.useState<any>([]) 
    console.log(data)
    return (
        <div className={styles.notes}>
           <MainNavbar />
           <div className={styles.notesHeader}>
               <h1>Notes Page</h1>
               {/* {
                   notes.map((note: any) => (
                       <NoteDisplay />
                   ))
               } */}
           </div>
           <div className={styles.notesContent}>
                <div className={styles.viewNoteContainer}>
                    <span>View Notes</span>
                    <div>
                        <NoteDisplay data={data}  /> 
                    </div>
                </div>
           </div>
                {/* <div className={styles.createNoteContainer}>
                        <Link href='/notes/create'>
                    <div className={styles.createLink}>
                            Create New Note
                    </div>
                        </Link>
                </div> */}
       </div >
    )
}

export default Notes