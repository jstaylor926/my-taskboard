import React from 'react'
import styles from './notesStyles.module.css';

function ViewNotes() {
  return (
    <div className={styles.viewNote}>
        <div>
            <h1>View Notes</h1>
        </div>
        <div className={styles.noteContainer}>

        </div>
    </div>
  )
}

export default ViewNotes