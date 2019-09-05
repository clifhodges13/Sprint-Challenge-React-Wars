import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './components/CharacterCard'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import styled from 'styled-components'
import './App.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(res => {
        console.log(res.data)
        setPagination(res.data)
        setData(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const StyledContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    color: #333;

    &:last-child {
      justify-content: center;
    }
  `

  return (
    <div className="App">
      <h1 style={{fontFamily: 'StarJedi'}} className="Header">React Wars</h1>
      <StyledContainer>
        {data.map((char, index) => {
          return <CharacterCard key={index} name={char.name} birth_year={char.birth_year} gender={char.gender} />
        })}
      </StyledContainer>
      <Pagination>
        <PaginationItem>
          {/* <PaginationLink first href={pagination.map((char, index) => {
          return <CharacterCard key={index} name={char.name} birth_year={char.birth_year} gender={char.gender} />
        })} /> */}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default App
