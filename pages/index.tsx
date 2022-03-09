import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
   <div className={styles.container}>
     <Head>
       <title>JTs TaskBoard </title>
     </Head>
     <div>
        <div>
          <h1>TaskBoard</h1>
        </div>
     </div>
   </div>
  )
}

export default Home
