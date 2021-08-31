import React, { useState } from 'react';
import Layout from './components/Layout';
import Start from './views/Start';
import Theme from './views/Theme';

function App() {
  const [currentView, setCurrentView] = useState('start');

  return (
    <Layout>
      {currentView === 'start' && <Start handleView={setCurrentView} />}
      {currentView === 'theme' && <Theme handleView={setCurrentView} />}
    </Layout>
    
  );
}

export default App;
