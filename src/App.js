import './App.css';


import Navbar from './components/Navbar';

import SearchBar from './components/SearchBar';

import Moviecard from './components/Moviecard';

import React, { useState, useEffect } from 'react';


import MovieList from './components/MovieList';


const App = () => {
    const[search, setSearch]=useState("");

    const[theme, setTheme]= useState("light");

    const changeTheme =(newTheme)=>{

      if(newTheme==="light"){
        document.body.style.backgroundColor="white";
      }
      if(newTheme==="dark"){
        document.body.style.backgroundColor="#444444";
      }
      if(newTheme==="retro"){
        document.body.style.backgroundColor="#f4e1d2";
      }

    }



  return (
    <div>
        <Navbar changeTheme={changeTheme} />

        <SearchBar search={search} setSearch={setSearch}/>

        <MovieList search={search} />
        
        
      </div>
  )
}

export default App

