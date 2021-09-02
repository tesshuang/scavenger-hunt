import React, { useState } from 'react';
import Layout from './components/Layout';
import Start from './views/Start';
import Theme from './views/Theme';
import Players from './views/Players';

function App() {
  const [currentView, setCurrentView] = useState('start');
  const [gameTheme, setGameTheme] = useState('indoor');
  const [players, setPlayers] = useState([]);

  console.log(players);
  return (
    <Layout>
      {currentView === 'start' && <Start handleView={setCurrentView} />}
      {currentView === 'theme' && <Theme handleView={setCurrentView} handleTheme={setGameTheme}/>}
      {currentView === 'players' && <Players handleView={setCurrentView} players={players} handlePlayers={setPlayers} />}
    </Layout>
    
  );
}

export default App;
