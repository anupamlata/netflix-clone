import React from 'react';
import './App.css';
import Row from './row';
import requests from './request';
function App() {
  return (
    <div className="App">
     <h1>hi lets to build a clone of netflix</h1>
     <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title ="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
