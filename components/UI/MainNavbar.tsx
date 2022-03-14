import * as React from 'react';
import styles from "./uiStyles.module.css";
import Link from "next/link";
import {RoutePath} from "../../pages/links";

const MainNavbar = () => {
    return (
        <div className={styles.createNav}>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href={RoutePath.NOTES}>Notes</Link></li>
                    <li><Link href={RoutePath.CALENDAR}>Calendar</Link></li>
                    <li><Link href={RoutePath.PLANNER}>Planner</Link></li>
                    <li><Link href={RoutePath.TASKS}>Tasks</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavbar;