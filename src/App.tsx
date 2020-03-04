import React from 'react';
import './App.css';
import Grid from './components/Grid'
import { Item1, Item2, Item3 } from './components/Items'
function App() {
  return (
    <div className="App">
      <Grid>
        <Item1>Item1</Item1>
        <Item2>Item2</Item2>
        <Item3>Item3</Item3>
      </Grid>
    </div>
  );
}

export default App;
