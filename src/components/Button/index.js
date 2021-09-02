import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick, btnType }) => {
  const getStyle = (btnType) => {
    if(btnType === 'circle') {
      return styles.circle;
    } 
    return styles.regular;
  }

  return (
    <button className={`${styles.btn} ${getStyle(btnType)}`} onClick={onClick}>{label}</button>
  )
}

export default Button;