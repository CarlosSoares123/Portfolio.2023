import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr;
  grid-gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  
`
