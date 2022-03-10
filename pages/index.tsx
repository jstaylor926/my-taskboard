import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { links } from './links'
import LinkCard from '../components/UI/LinkCard'
import { AppContainer, ContentContainer, LinkContainer } from '../styles/homeStyles';
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>JTs TaskBoard </title>
      </Head>
      <div className={styles.homeContent}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>TaskBoard</h1>
        </div>
        <div className={styles.content}>
          {
            links.map((card: any, index: number) => (
              <div className={styles.linkContainer} key={index}>
                <LinkCard
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkPath={card.linkPath}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
