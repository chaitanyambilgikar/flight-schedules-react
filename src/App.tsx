import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Grid from 'components/grid';
import Header from 'components/header';
import HeaderNavigation from 'components/headerNavigation';
import { headerItems } from 'constants/headerItemContants';
import SchedulesDisplay from 'components/schedulesDisplay';
function App() {
  return (
    <Router>
      <div className='App'>
        <Grid className='grid'>
          <Header className='header'>
            <HeaderNavigation headerItems={headerItems} />
          </Header>
          <Switch>
            <Route path='/schedules'>
              <SchedulesDisplay className='schedules-display' />
            </Route>
          </Switch>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
