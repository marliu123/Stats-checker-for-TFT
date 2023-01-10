import { createSlice, configureStore } from '@reduxjs/toolkit'
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const API_key = "RGAPI-014c1538-52fc-41aa-9688-70c01b5c9e48";
  const [userName, setUsername] = useState("");
  const [playerData, setPlayerData] = useState({});


  function searchPlayer(event){
    var APIstring = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+userName+ "?api_key=" + API_key;
    axios.get(APIstring).then(function(response){
      setPlayerData(response.data);
    }).catch(function(error){
      console.log(error);
    });
  } 

  
  return (
    <div className = "App">
      <div className = "Container">
        <h1>Stats Checker</h1>
        <input type = "text" onChange ={e => setUsername(e.target.value)}></input>
        <button onClick = { e => searchPlayer(e)}>Click</button>
      </div>
      <br/>
      {JSON.stringify(playerData) != '{}' ?
      <>
      <img src = {"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/"+playerData.profileIconId+".png"}></img>
      <p>{playerData.name}</p>
      <p>{playerData.summonerLevel}</p>
      </>
      :
      <p>No player found</p>
      }
    </div>
  );
}

export default App;
