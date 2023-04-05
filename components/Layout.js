import Head from 'next/head';
import styles from './layout.module.css';
import Navbar from './Navbar.js';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Wilson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/samIcon.ico' size='48x48'/>
      </Head>
      <header className={styles.header}>
        {
            <Navbar></Navbar>
        }
      </header>
        <main>
          {children}
        </main>
    </div>
  );
}