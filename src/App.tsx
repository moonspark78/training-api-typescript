import React from 'react';
import './App.css';
import {ApiPosts} from "./Components/ApiPosts"
import { ApiUsers } from './Components/ApiUsers';
import { ApiPokemons } from './Components/ApiPokemons';

function App() {
  return (
    <div className="App">
      {/* <ApiPosts/> */}
      {/* <ApiUsers/> */}
      <ApiPokemons/>
    </div>
  );
}

export default App;
