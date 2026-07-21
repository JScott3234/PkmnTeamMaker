import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { fetchPokemonData } from '../backend/pokePop.js';
import { pokemonList } from '../database/pkmnLibrary/pkmn.js';

function DexMenu() {

    /** TODO: Implement full list of pokemon, and filtering by search bar input, Update page elements upon clicking a pokemon in the list, and display the selected pokemon's data in the PkmnMenu component.
     * @description
     * Handles the selection of a Pokemon from the displayed list
     * @param {string} pokemonName - The name of the selected Pokemon
     * @param {list} pokemonList - The list of available Pokemon to select from
     * @param {function} fetchPokemonData - Fetches data for the selected Pokemon from the PokeAPI
     * @returns {void}
     */
    return (
        <div className="border">
            <Container className="overflow-auto my-2" style={{ maxHeight: '635px' }}>
                <ListGroup variant="flush">
                    {pokemonList.map(pokemon => (
                        <ListGroup.Item key={pokemon.id} onClick={() => fetchPokemonData(pokemon.name)}>
                            {pokemon.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
}

export default DexMenu;