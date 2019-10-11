import React from 'react';


const CharacterCard = props => {
    return (
      
          <div key={props.key}>
            <h1>{props.name}</h1>
            <h3>{props.birth_year}</h3>
            <h3>{props.height}</h3>
            <h3>{props.mass}</h3>
            <h3>{props.skin_color}</h3>
          </div>
      
    );
  };
  
  export default CharacterCard;