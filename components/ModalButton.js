import React, { useState } from 'react';
import styles from './ModalButton.module.css';
import Modal from './Modal';
import Image from 'next/image';
import Link from 'next/link';

export default function ModalButton({ title, description, image, link }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className={styles.totalWrapper}>
        <button onClick={() => setIsOpen(true)} className={styles.testButton}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={title} className={styles.image} />
          </div>
        </button>
        <div className={styles.titleWrapper}>{title}</div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link}>
          <Image
            src='/images/github-mark.png'
            alt='Github'
            width={40}
            height={40}
          />
          <p>Open Github</p>
        </Link>
      </Modal>
    </>
  );
}
