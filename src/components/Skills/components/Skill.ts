import styled from "styled-components";

export const Skill = styled.div`
  text-align: center;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.background};
  transition: all.4s ease;

  &:hover{
    background-color: ${props => props.theme.colors.primary};

    span, div{
      color: ${props => props.theme.colors.background};
    }
  }
`
export const ImgSkill = styled.div`
  font-size: 70px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NameSkill = styled.span`
  
`