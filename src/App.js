import { useState } from 'react';
import './App.css';


const moviesDB = {
  'Thriller':[
    {'movie':'The Dark Knight','rating':'5/5'},
    {'movie':'Tenet','rating':'3.8/5'},
    {'movie':'The Northman','rating':'4.4/5'},
    {'movie':'The Revenant','rating':'4/5'}
  ],
  'Action':[
    {'movie':'The Raid: Redemption','rating':'4.3/5'},
    {'movie':'Mission: Impossible','rating':'4/5'},
    {'movie':'John Wick','rating':'4.5/5'},
    {'movie':'Kingsman','rating':'3.75/5'}
  ],
  'Horror':[
    {'movie':'Hereditary','rating':'4.5/5'},
    {'movie':'The Ring','rating':'3.5/5'},
    {'movie':'Tumbbad','rating':'4.1/5'},
    {'movie':'Get Out','rating':'3.9/5'}
  ]
}

const genre = Object.keys(moviesDB);

function App() {

  const [selectedGener, selectedGenerFunction] = useState("Thriller");

  function movieClickHandler(genres){
    selectedGenerFunction(genres);
  }
  

  return (
    <div className="App">
      <h1>🎬 My Movies Flix</h1>
      <p>Checkout my favorite Movies. Select a genre to get started</p>
      
      <div>
      {genre.map(function(genres){
        return <button
        onClick = {() => movieClickHandler(genres)}
        style = {{}}
        >
          {genres}
        </button>
      })}
      </div>
      <hr/>

      <div>
        <ul>
          {moviesDB[selectedGener].map(function(movies){
            return <li>
              <div style={{fontSize:"larger"}}>{movies.movie}</div>
              <div style={{fontSize:"smaller"}}>{movies.rating}</div>
            </li>
          })}
        </ul>
      </div>


    </div>
  );
}

export default App;
