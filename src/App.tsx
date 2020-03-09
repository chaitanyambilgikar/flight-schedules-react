import React from 'react';
import './App.css';
import Grid from './components/grid';
import Header from './components/header';
import HeaderNavigation from './components/headerNavigation';
import { headerItems } from './constants/headerItemContants';
import { MyForm } from './containers/Form/Form';
function App() {
  return (
    <div className='App'>
      <Grid className='grid'>
        <Header className='header'>
          <HeaderNavigation headerItems={headerItems} />
        </Header>
        <MyForm />
      </Grid>
    </div>
  );
}

export default App;
