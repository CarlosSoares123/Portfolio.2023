import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${props => props.theme.colors.backgroundSection};

  @media (min-width: 1250px) {
    padding-inline: 200px;
  }
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
` 
export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1250px) {
    grid-gap: 60px;
  }
`
export const Project = styled.div`
  font-size: 20px;
  padding: 40px 15px;
  display: flex;
  flex-direction: column; 
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:  0.4s ease-in-out;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover .cover{
  transform: translateY(0);
  opacity: 1;
  transition: .4s ease-in-out;
  }
`
export const Title = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`
export const Content = styled.div`
  padding-block: 0 16px;
  padding-inline: 10px;
  display: grid;
  gap: 5px;
`
export const Text = styled.p`
  font-size: 16px;
  text-align: justify;
`
export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundCover} ;
  transform: translateY(100%);
  opacity: 0;
  transition: .4s ease;
`
export const ButtonLink = styled.a`
  font-size: 30px;
  color: ${props => props.theme.colors.background};
`
export const Stacks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding-inline: 5px;
  @media (min-width: 1250px) {
    justify-content: center;
  }
`
export const Stack = styled.li`
  width: fit-content;
  font-weight: 500;
  font-size: 14px;
  border-radius: 15px;
  padding: 4px 16px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
`