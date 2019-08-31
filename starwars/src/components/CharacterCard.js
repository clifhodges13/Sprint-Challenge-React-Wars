import React from 'react'
import Name from './Name'
import BirthYear from './BirthYear'
import Gender from './Gender'
import styled from 'styled-components'

export default function CharacterCard(props) {

  const StyledCard = styled.div `
    width: 30%;
    background: rgba(225,225,225,.6);
    border: 1px solid white;
    border-radius: 5px;
    margin: 1%;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      background: rgba(225, 225, 225, .9);
    }

    & h2 {
      font-family: 'StarJedi', sans-serif;
      letter-spacing: 2px;
      font-size: 18px;
    }

    & h3 {
      font-size: 14px;
    }

    & p {
      font-size: 12px;
    }
  `

  return (
    <StyledCard>
      <Name name={props.name} />
      <BirthYear birth_year={props.birth_year} />
      <Gender gender={props.gender} />
    </StyledCard>
  )
}
