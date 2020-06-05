import React, { useEffect, useState } from 'react';
import Recipe from "./recipe"
import './App.css';
import translate from 'translate'; 




// Promises with .then(). Options can also be an object
translate('こんにちは世界', { from: 'ja', to: 'es' }).then(text => {
  console.log(text);  // Hola mundo
});








const App = () => {

  // USE INVAROUMENT TOOLS !!
  const APP_ID = 'b3b596e3';
  const APP_KEY = '513624558d04400bff54b64901485c2e';




  const [recipes, setRecipies] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("apple")
  const recipesURL = "https://api.edamam.com/search?q=" + query + "&app_id=" + APP_ID + "&app_key=" + APP_KEY

  useEffect(() => {

    getRecipies();
  }, [query])

  const getRecipies = async () => {
    const response = await fetch(recipesURL)
    const data = await response.json()
    setRecipies(data.hits)
    console.log(data.hits)
    

  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("")

  }
  return (
    <div className="App">

      <form className="search-form" onSubmit={getSearch} >
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
     
     
      <div className="recipies">


        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label}
            cal={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        )

        )}

      </div>

    </div>
  );


}



export default App;
