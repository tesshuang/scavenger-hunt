import React from 'react';

import Heading from '../components/Heading';
import Button from '../components/Button';
import Input from '../components/Input';

const Players = ({ handleView }) => (
  <div>
    <Heading title="Players" />
    <Input label="Enter some players" />
    <div></div>
    <Button label="Player Game" onClick={() => handleView('theme')} />
  </div>
  
)

export default Players;