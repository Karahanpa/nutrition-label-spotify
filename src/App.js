import React, { useState, useEffect } from 'react';
import FetchComponent from './FetchComponent';
const App = () => {
  const baseUrl = "https://api.spotify.com/v1";
  const trackEndpoint = "/me/top/tracks?time_range=medium_term&limit=5";
  const artistEndpoint = "/me/top/artists?time_range=medium_term&limit=5";
  const trackInfo = FetchComponent(baseUrl, trackEndpoint);
  const artistInfo = FetchComponent(baseUrl, artistEndpoint);
  
  return (
    <div>
      <div className="label">
      <header>
        <h1 className="bold">Nutrition Facts</h1>
        <div className="divider"></div>
        <p>5 servings per container</p>
        <p className="bold">Serving size <span>2/3 cup (55g)</span></p>
        <div className="divider large"></div>
      </header>
      <div className="calorie-info">
        <div className="container-left">
          <h2 className="bold small-text">Favourite Artist {/*<span>Times Listened</span>*/}</h2>
          <p>{artistInfo.length > 0 && artistInfo[0].name} {/*<span>230</span>*/}</p>
          <div className="medium divider"></div>
        </div>
      <div className="daily-value small-text">
        <p className="bold right small-text">Your Top Songs</p>

        {trackInfo.map((item) => (
          <div>
            <p><span><span className="bold song-title">{item.name}</span></span>{/*<span className="bold">10%</span>*/}</p>
          <p className="indent no-divider">Popularity<span className="bold">{item.popularity}%</span></p>
          <div className="divider"></div>
          </div>
        ))}
        
        
        
        <div className=" no-divider divider large"></div>
        <h2 className="bold small-text">Favorite Artists</h2>
        {artistInfo.map((item) => (
          <p>{item.name}</p>
        ))}
        {/*<p>Pop <span>10%</span></p>
        <p>Rock <span>20%</span></p>
        <p>Hip-hop/Rap <span>45%</span></p>
        <p className="no-divider">Electronic Dance Music <span>6%</span></p>*/}
        <div className="no-divider medium divider"></div>
        <p className="note no-divider">* The % Monthly Value (DV) tells you how much a nutrient in a serving of food contributes to a monthly diet. 2,000 calories a day is used for general nutrition advice.</p>
           
          
        </div>
      </div>
    </div>
    {/*
      <h1>Top Tracks</h1>
      <ul>
        {trackInfo.map((item) => (
          <li className='song' key={item.id}>{item.name} <br /> by {item.artists[0].name} {item.popularity} </li>
        ))}
      </ul>
      <ul>
        <h1>Top Artists</h1>
        {artistInfo.map((item) => (
          <li className='song' key={item.id}>{item.name}</li>
        ))}
        </ul> */}
        
    </div>
    
  );
};

export default App;
