import * as React from 'react';
import styles from './notesStyles.module.css';
import Link from 'next/link';


interface MainButtonProps {
    path: string;
    decision: string;
}
const MainButton = ({ path, decision }: MainButtonProps) => {
    return (
        <Link href={path}>
            <div className={styles.mainButton}>
                <span className={styles.btnText}>{decision}</span>
            </div>
        </Link>
    )
}

export default MainButton;
