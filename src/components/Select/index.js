import React from 'react';
import styles from './Select.module.css';

const Select = ({ handleTheme }) => {
  
  return (
    <div className={styles.container}>
      <label htmlFor="theme-select">Choose a theme:</label>
      <div className={styles.select} onChange={(e) => handleTheme(e.target.value)}>
      <select name="themes" id="theme-select" >
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
      </select>
      </div>
      
    </div>
  )
}

export default Select;