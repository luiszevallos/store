import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StoreScreen from './pages/containers/StoreScreen';
import Layout from './pages/sections/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={StoreScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
