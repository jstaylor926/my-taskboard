import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { LayoutContainer } from '../components/UI/styles'
import { links } from './links'
import LinkCard from '../components/UI/LinkCard'


const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <Head>
        <title>JTs TaskBoard </title>
      </Head>
      <div>
        <div>
          <h1>TaskBoard</h1>
        </div>
        <div>
          {
            links.map((card: any, index: number) => {
              console.log(card.link)
              return (
                <>
                  <LinkCard
                    title={card.title}
                    description={card.description}
                    link={card.link}
                    linkPath={card.linkPath}
                  />
                </>
              )
            })
          }
        </div>
      </div>
    </LayoutContainer>
  )
}

export default Home
