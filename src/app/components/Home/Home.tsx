import React from 'react'
import Image from 'next/image'
import homeImg from '@/app/Images/Home.png'
import styles from "./Home.module.css"

function Home() {
  return (
    <main className={styles.mainContainer}>
    <section className='flex flex-col justify-center items-start'>
      <h1 className={styles.heading}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className={styles.paragraph}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
      <button className={styles.exploreBtn}>
        Explore Now
      </button>
    </section>
    <aside className={styles.mainIMG}>
      <Image src={homeImg} alt="IMG" layout="responsive" loading="lazy" quality={75} placeholder='empty' sizes='(max-width: 1024px) 400px, 500px, (max-width: 768px) 300px, 400px' />
    </aside>
    </main>
  )
}

export default Home