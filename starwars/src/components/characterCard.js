import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background: black;
  color: white;
width: 30%;
opacity: .3;
padding: 2%;
margin: 2%;

`;



const CharacterCard = props => {
    return (
      
          <Card >
            <h1>{props.name}</h1>
            <h3>Birth Year: {props.birth_year}</h3>
            <h3>Hieght: {props.height}</h3>
            <h3>Mass: {props.mass}</h3>
            <h3>Skin tone: {props.skin_color}</h3>
          </Card>
      
    );
  };
  
  export default CharacterCard;