import React from 'react';
import './App.css';
import Row from './Rows';
import requests from './request';
function App() {
  return (
    <div className="App">
     <h1>Hi Lets to Build a clone of netflix</h1>
     <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
