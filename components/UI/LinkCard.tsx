import * as React from 'react';
import Link from 'next/link';
import { LinkCardType } from './ui-types';
import styles from './uiStyles.module.css';

const LinkCard = ({ title, link, linkPath, description }: LinkCardType) => {
    return (
        <div className={styles.linkCard}>
            <div className={styles.linkHeader}>
                <span>
                    <div className={styles.title}>{title}</div>
                </span>
            </div>
            <div className={styles.linkContent}>
                <div className={styles.linkDescription}>
                    {description}
                </div>
                <div className={styles.link} onClick={() => console.log(link)} >
                        <Link href={link}>
                            <div className={styles.linkText}>
                                {linkPath}
                            </div>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default LinkCard;