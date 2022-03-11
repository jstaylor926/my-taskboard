import * as React from 'react';
import styles from './notesStyles.module.css';
import Link from 'next/link';


interface MainButtonProps {
    path: string;
    decision: string;
}
const MainButton = ({path, decision}: MainButtonProps) => {
    return (
        <div className={styles.mainButton}>
            <Link href={path}>
                {decision}
            </Link>
        </div>
    )
}

export default MainButton;
