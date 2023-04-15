import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`;

const LogoWrapper = styled.div`
  margin-top: 2rem;
`;

const LogoImage = styled.img`
  width: 600px;
  max-width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  max-width: 100%;

  button {
    margin: 0 1rem;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(39,117,187);
  color: rgb(39,117,187);
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover{
    background-color: rgb(27 53 110);
    border: 2px solid rgb(27 53 110);
  }

`;

const ButtonPrimary = styled.button`
background: rgb(39,117,187);
border-radius: 3px;
border: 2px solid rgb(39,117,187);
color: white;
margin: 0.5em 1em;
padding: 0.25em 1em;

&:hover{
  background-color: rgb(27 53 110);
  border: 2px solid rgb(27 53 110);
}

`;



const Homepage = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoImage src={logo} alt="Pokemon logo" />
      </LogoWrapper>
      <ButtonContainer>
        <Button>
          <Link to="/pokemon"><span>Összes Pokémon</span></Link>
        </Button>
        <ButtonPrimary>
          <Link to="/search"><span>Pokémon keresése</span></Link>
        </ButtonPrimary>
      </ButtonContainer>
    </Container>
  )
}

export default Homepage