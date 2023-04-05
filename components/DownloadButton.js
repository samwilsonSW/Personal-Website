import React from 'react';
import styles from './DownloadButton.module.css'

export default function DownloadButton() {
  const handleDownload = () => {
    const fileName = 'Resume.pdf';
  
    const link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = '/documents/Resume_.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  
  return (
    <button className={styles.button} onClick={handleDownload}>Download Resume</button>
  );
}
