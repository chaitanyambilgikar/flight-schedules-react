import React from 'react';
import './App.css';
import Grid from './components/Grid'
import { Sidebar, Content } from './components/Items'
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Grid>
        <Header textColor="white">Header</Header>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </Grid>
    </div>
  );
}

export default App;
