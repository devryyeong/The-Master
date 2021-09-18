import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// pages for this product
import Header from './components/commons/Header.js';
import Search from './components/MainPage/Search.js';
import LocalMaster from './components/MainPage/LocalMaster.js';
import FindMaster from './components/FindMasterPage/SearchCategory.js';

function App() {
  return (
    <Suspense fallback={(<div>~Loading~</div>)}>
      <Header />
      <Switch>
        <Route path='/findmaster' component={FindMaster} />
          <div style={{ paddingTop: '190px', paddingLeft: '123px', minHeight: 'calc(100vh - 80px)' }}>
            <Search />
            <LocalMaster />
          </div>
      </Switch>
    </Suspense>
  );
}

export default App;
