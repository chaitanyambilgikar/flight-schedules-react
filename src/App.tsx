import React from 'react';
import './App.css';
import Grid from './components/Grid'
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Grid>
        <Header textColor="white">Header</Header>
        <Sidebar className="sidebar" items={['Schedules', 'Status']}>Sidebar</Sidebar>
        <Content className="content">Content</Content>
      </Grid>
    </div>
  );
}

export default App;
