import React from 'react'
import styles from './Footer.module.css'


function Footer() {
  return (
    <footer className='relative bottom-0 w-[100%]'>
      <div className='footerContainer flex justify-around items-center mt-2 bg-[#A29875] h-[25vh]'>
      <ul className='flex flex-col '>
        <h2 className={styles.heading}>My Account</h2>
        <li className={styles.text}>Career at Eldy</li>
        <li className={styles.text}>About us</li>
        <li className={styles.text}>Sustainability</li>
        <li className={styles.text}>Press</li>
      </ul>
      <ul className='flex flex-col '>
        <h2 className={styles.heading}>Help</h2>
        <li className={styles.text}>FAQ</li>
        <li className={styles.text}>Shipping</li>
        <li className={styles.text}>Returns</li>
        <li className={styles.text}>Order Status</li>
      </ul>
      <ul className='flex flex-col '>
        <h2 className={styles.heading}>follow us on</h2>
        <li className={styles.text}>Twitter</li>
        <li className={styles.text}>Facebook</li>
        <li className={styles.text}>Google Plus</li>
        <li className={styles.text}>Instagram</li>
      </ul>
      <ul className='flex flex-col '>
        <h2 className={styles.heading}>About us</h2>
        <li className={styles.text}>Email: purity_jewel@gmail.com</li>
        <li className={styles.text}>Phone: 0987654321</li>
      </ul>
      </div>
      <div className='bg-[#504933] h-12 w-[100%]' ></div>
    </footer>
  )
}

export default Footer