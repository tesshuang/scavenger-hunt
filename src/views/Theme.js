import React from 'react';

import Heading from '../components/Heading';
import Button from '../components/Button';

const Theme = ({ handleView }) => (
  <div>
    <Heading title="Hunting Theme" />
    <Button label="Next" onClick={() => handleView('players')}/>
  </div>
  
)

export default Theme;