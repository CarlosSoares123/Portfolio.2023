import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const ContactAdmin = styled.div`
  display: grid;
  grid-gap: 10px;
`
export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
export const Contact = styled.div`
  display: flex;
  gap: 6px;
  span{
    color: ${props => props.theme.colors.primary};
    font-size: 14px;
    font-weight: 600;
  }
`
export const Button = styled.button`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
`
export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
`