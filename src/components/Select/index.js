import React from 'react';
import styles from './Select.module.css';

const Select = () => {
  
  return (
    <div className={styles.container}>
      <label for="theme-select">Choose a theme:</label>
      <div className={styles.select}>
      <select name="themes" id="theme-select" >
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
      </select>
      </div>
      
    </div>
  )
}

export default Select;