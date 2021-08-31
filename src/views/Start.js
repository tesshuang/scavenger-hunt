import React from 'react';

import Heading from '../components/Heading';
import Button from '../components/Button';

const Start = ({ handleView }) => (
  <div>
    <Heading title="Virtual Scavenger Hunt" />
    <Button label="Start Game" onClick={() => handleView('theme')} />
  </div>
  
)

export default Start;