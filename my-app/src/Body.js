import React from 'react';
import './Body.css';
import PlanetCount from './PlanetCount';
import PeopleCount from './PeopleCount';
import 'tachyons';
import StarshipCount from './StarshipCount';

const Body = (props) => { 
    return (
        <div className="yellow body-div">
          <PlanetCount />
          <PeopleCount />
          <StarshipCount />
        </div>
    );
}
export default Body;