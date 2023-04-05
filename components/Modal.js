import React from 'react';
import styles from './Modal.module.css';

const MODAL_STYLES = {
  position: 'fixed', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFFFED',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null

  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        {children}
        <button onClick={onClose} className={styles.close}>Close</button>
      </div>
    </>
  )
}
