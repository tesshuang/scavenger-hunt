import React, { useState } from 'react';

import Heading from '../components/Heading';
import Button from '../components/Button';
import Input from '../components/Input';

const Players = ({ handleView, players, handlePlayers }) => {
  const [name, setName] = useState('');

  const addPlayer = (e) => {
    if(e.key === 'Enter' && name !== '') {
      console.log('enter a new player');
      handlePlayers([...players, name]);
      setName('');
    }
  }

  const removePlayer = (curPlayer) => {
    handlePlayers(players.filter(player => player !== curPlayer));
  }

  return (
    <div>
      <Heading title="Players" />
      <Input
        label="Enter some players"
        initialValue={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => addPlayer(e)} />
      {players.length > 0 && (
        <div>
          {players.map((player, index) => (
            <div key={index}>
              <span>{player}</span> 
              <Button label="&times;" onClick={() => removePlayer(player)} btnType="circle" />
            </div>
          ))}
        </div>
      )}
      <Button label="Player Game" onClick={() => handleView('theme')} />
    </div>
)}

export default Players;