import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.scss'
import PropTypes from 'prop-types';

class PokeList extends React.Component {

  render() {
    const {clickCard} = this.props;
    return(
      
      <ol className="pokemon_list">{this.props.pokemons.map((pokemon, index)=>
        <li className="pokemon_elements" id={pokemon.id} key={index} onClick={clickCard}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            
            />
        </li>
        )}
      </ol>


    );
  }
}

PokeList.propTypes = {
  pokemons: PropTypes.array,
}


export default PokeList;