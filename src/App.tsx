import React from 'react';
import './App.css';
import Grid from './components/grid';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <Grid className='grid'>
        <Header className='header'>
          <div className='app-name'>Lufthansa Flight Center</div>
          <div className='menu'>Menu</div>
        </Header>
      </Grid>
    </div>
  );
}

export default App;
