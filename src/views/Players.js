import React, { useState } from 'react';

import Heading from '../components/Heading';
import Button from '../components/Button';
import Input from '../components/Input';

const Players = ({ handleView, players, handlePlayers }) => {
  const [name, setName] = useState('');

  const addPlayers = (e) => {
    if(e.key === 'Enter' && name !== '') {
      console.log('enter a new player');
      handlePlayers([...players, name]);
      setName('');
    }
  }

  return (
    <div>
      <Heading title="Players" />
      <Input label="Enter some players" onChange={(e) => setName(e.target.value)} onKeyPress={addPlayers} initialValue={name}/>
      {players.length > 0 && (
        <div>
          {players.map((player, index) => (
            <div key={index}>{player} <Button label="&times;" onClick={() => handleView('theme')} btnType="circle" /></div>
          ))}
        </div>
      )}
      <Button label="Player Game" onClick={() => handleView('theme')} />
    </div>
)}

export default Players;