import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
   <div>
     <Head>
       <title>JTs TaskBoard </title>
     </Head>
     <div>
        <div>
          <ul>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
     </div>
   </div>
  )
}

export default Home
