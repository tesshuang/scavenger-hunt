import React from 'react';

const Heading = ({ type, title, color}) => {

  if (type === 'extend') {
    return <h2 style={{ color: color}}>{title}</h2>
  }
  return <h1>{title}</h1>
}

export default Heading;