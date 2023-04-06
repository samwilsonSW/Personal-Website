import Layout from '../components/Layout.js';
import Image from 'next/image'
import styles from '../styles/About.module.css';

export default function About() {
  const profilePic = '/images/headshot.jpg'
  const description = "I am a Senior graduating from Texas Tech University in May 2023 with a B.S. in Computer Science. My goal is to find opportunities in the industry post-graduation as a software engineer."
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <Image className={styles.image}
          src={profilePic} alt='Sam Wilson' width={400} height={600} 
        />
        <p className={styles.description}>{description}</p>
      </div>
    </main>
  );
}