import React, {Component} from 'react';
import 'tachyons';
import './Summary.css';
import PlanetCount from '../planet_api/PlanetCount';
import CharacterCount from '../character_api/CharacterCount';
import StarshipCount from '../starship_api/StarshipCount';


class Summary extends Component {
  render(){
    return (
      <div className="yellow summary-div">
        <PlanetCount />
        <CharacterCount />
        <StarshipCount />
      </div>
    );
  }
}
export default Summary;