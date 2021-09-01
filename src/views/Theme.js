import React from 'react';

import Heading from '../components/Heading';
import Select from '../components/Select';
import Button from '../components/Button';

const Theme = ({ handleView, handleTheme }) => (
  <div>
    <Heading title="Hunting Theme" />
    <Select handleTheme={handleTheme} />
    <Button label="Next" onClick={() => handleView('players')}/>
  </div>
  
)

export default Theme;