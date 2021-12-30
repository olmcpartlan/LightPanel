import React from 'react';
import logo from './logo.svg';
import './App.css';
import PHueSettings from './components/phue';
import Header from './components/header';

function App() {
  // its ugly but it works 
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <Header />
      <PHueSettings />
    </div>
  );
}

export default App;
