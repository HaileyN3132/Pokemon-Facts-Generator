import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  // Perform  fetching

  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);

  /*
  async function handleClick() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/90");
    const data = await response.json();
    setPokemon(() => data);
    console.log(data.sprites["back_default"]);
  }
  */

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  function handleClick() {
    //Generate a random number from 0 - 1025, represent the pokemon id range
    setId((id) => id + 1);
  }

  return (
    <section>
      <h1 className="text-center text-3xl font-bold my-10">
        Pokemon Fact Of A Day
      </h1>
      <div className="flex flex-col justify-center gap-20">
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-green-300 px-4 py-2 rounded font-semibold hover:bg-green-400 transition duration-300 ease-in-out"
          >
            Get Pokemon {id}
          </button>
        </div>

        {pokemon ? <Card pokemon={pokemon} /> : <p>EMPTY</p>}
      </div>
    </section>
  );
}

export default App;
