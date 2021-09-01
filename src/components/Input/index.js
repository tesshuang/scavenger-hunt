import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, onChange }) => {
  
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input className={styles.input} onChange={onChange} />
    </div>
    
  )
}

export default Input;