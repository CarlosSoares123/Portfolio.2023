import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-top: 96px;
  display: flex;
  align-items: center;
  

  @media (min-width: 992px) {
    height: 100vh;
  }
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 992px) {
    width: 700px;
    font-size: var(--fs-text-hero);
    gap: 20px;
  }
`
export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: var(--fs-h1);
`
export const Media = styled.div`
  display: flex;
  gap: 6px;
  @media (min-width: 992px) {
    gap: 20px;
  }
`
export const ButtonLink = styled.a`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
    &:hover{
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`
