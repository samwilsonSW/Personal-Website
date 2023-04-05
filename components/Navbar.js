import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
  const handleScrollToSection = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
      duration: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <nav>
      <div className={styles.header}>
        <div className={styles.left}>
          <ul className={styles.leftList}>
            <li>
              <Link href='https://www.linkedin.com/in/sam-wilson-777503224/'>
                <Image
                  src='/images/LI-In-Bug.png'
                  alt='LinkedIn'
                  width={45}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link href='https://github.com/samwilsonSW'>
                <Image
                  src='/images/github-mark.png'
                  alt='Github'
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </div>
        {/*<div className={styles.center}>
                    <span className={styles.firstname}>Sam</span>
                    <span className={styles.lastname}>Wilson</span>
                </div>*/}
        <div className={styles.right}>
          <ul className={styles.rightList}>
            <li>
              <a onClick={() => handleScrollToSection('Home')}>Home</a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('About')}>About</a>
            </li>
            {/*<li><Link href='#Skills'>Skills</Link></li>*/}
            <li>
              <a onClick={() => handleScrollToSection('Work')}>Work</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
