import React from 'react';
import './App.css';
import {ApiPosts} from "./Components/ApiPosts"
import { ApiUsers } from './Components/ApiUsers';

function App() {
  return (
    <div className="App">
      {/* <ApiPosts/> */}
      <ApiUsers/>
    </div>
  );
}

export default App;
