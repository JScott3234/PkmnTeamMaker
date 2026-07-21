/*fetch("https://pokeapi.co/api/v2/pokemon/scizor")
            .then(response => {
              if (!response.ok) {
                throw new Error("Could not fetch data from pokeapi.co");
              }
              return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching data:', error));
*/

//fetchPokemonData("scizor"); //testing

// When I hook up the PokemonAPI, I need to ingest the data, then refresh it every once in a while 
// Upon request of certain data (scheduled updates?)??

// Should Only call what I need, and not the entire dataset.
export async function fetchPokemonData(pokemonName) {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch data from pokeapi.co");
    }
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}