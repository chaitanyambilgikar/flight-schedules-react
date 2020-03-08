import React from 'react';
import './App.css';
import Grid from './components/grid';
import Header from './components/header';
import HeaderNavigation from './components/headerNavigation';
import { headerItems } from './constants/headerItemContants';
function App() {
  return (
    <div className='App'>
      <Grid className='grid'>
        <Header className='header'>
          <HeaderNavigation headerItems={headerItems} />
        </Header>
      </Grid>
    </div>
  );
}

export default App;
