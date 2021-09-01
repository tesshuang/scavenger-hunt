import React from 'react';

import Heading from '../components/Heading';
import Select from '../components/Select';
import Button from '../components/Button';

const Theme = ({ handleView }) => (
  <div>
    <Heading title="Hunting Theme" />
    <Select />
    <Button label="Next" onClick={() => handleView('players')}/>
  </div>
  
)

export default Theme;