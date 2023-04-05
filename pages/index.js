import Head from 'next/head';
import Layout from '../components/Layout.js';
import styles from '../styles/homeStyles.module.css'
import DownloadButton from '../components/DownloadButton.js';
import About from './about.js';
import WorkTest from './WorkTest.js';

export default function Home( props ) {
  const description = 'Software Engineer'

  return (
    <Layout>
      <Head>
        <title>Sam Wilson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="Home">
        <main className={styles.main}>
          <div className={styles.backgroundContainer}>
            <div className={styles.backgroundImage}></div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.name}>
              <span className={styles.firstname}>Sam</span>
              <span className={styles.lastname}>Wilson</span>
            </div>
            <div className={styles.intro}>
              <p>{description}</p>
            </div>
            <div className={styles.buttonDiv}>
              <DownloadButton></DownloadButton>
              <a className={styles.browserButton} href='/documents/Resume_.pdf'>Or view it in your browser here</a>
            </div> 
          </div>
        </main>
      </section>
      <section id="About"><About /></section>
      <section id="Work"><WorkTest /></section>
    </Layout>
  );
}
