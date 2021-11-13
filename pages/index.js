import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjalist | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1> 
        <p className={styles.text}>our site</p>
        <p className={styles.text}>the google of the future</p>
        <Link href ="/ninjas">
          <a className={styles.btn}>Ninjalist</a></Link> 
      </div>
    </>
  );
}
