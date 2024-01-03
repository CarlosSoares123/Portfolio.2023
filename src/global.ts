import styled, { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --color: #111827;
    
    // Font-size
    --fs-logo: 30px;
    --fs-h1: 36px;
    --fs-h3: 24px;
    --fs-text: 1.1rem;
    --fs-text-hero: 1.3rem;

    // Font-weight
    --fw-400: 400;
    --fw-600: 600;
    --fw-700: 700;

    @media (min-width: 992px) {    
    --fs-h3: 30px;
    --fs-h1: 70px;
  }
  }
  body{
    width: 100vw;
    background-color: ${props => props.theme.colors.background};
    font-size: var(--fs-text);
    color:  ${props => props.theme.colors.text};
    font-family: sans-serif;
    overflow-x: hidden;
  }
  button{
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  ul{
    list-style: none;
  }
  section{
    padding-inline: 16px;
    padding-top: 35px;
    padding-bottom: 35px;

    @media (min-width: 768px) {
      padding-inline: 5rem;
    }
    @media (min-width: 992px) {
      padding-inline: 3rem;
    }
    @media (min-width: 1250px) {
      padding-inline: 7rem;
    }
  } 
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  

  @media (min-width: 992px) {    
    justify-content: left;
  }
`
export const TitleSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2{
    width: fit-content;
    font-size: 16px;
    border-radius: 20px;
    width: fit-content;
    padding: 5px 16px;
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.primary};
  }
`
export const Title = styled.h3`
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`