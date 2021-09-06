import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

// pages for this product
import Header from './components/Header.js';
import Search from './components/Search.js';
import LocalMaster from './components/LocalMaster.js';

function App() {
  return (
    <Suspense fallback={(<div>~Loading~</div>)}>
      <Header />
      <div style={{ paddingTop: '190px', paddingLeft: '123px', minHeight: 'calc(100vh - 80px)' }}>
        <Search />
        <LocalMaster />
    </div>
    
    </Suspense>
    
  );
}

export default App;
