import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container'
import Header from './components/header/Header';
import Err from './components/err/Err';
import Body from './components/body/Body';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/post">
            <Body />
          </Route>
          <Route path="/:details">
            <PostDetails/>
          </Route>
          <Route path="*">
            <Err />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
