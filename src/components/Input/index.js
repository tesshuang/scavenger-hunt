import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, onChange, onKeyPress, initialValue }) => {
  
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input className={styles.input} value={initialValue} onChange={onChange} onKeyPress={onKeyPress}/>
    </div>
    
  )
}

export default Input;