import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  background-color: ${props => props.theme.colors.backgroundSection};
  
  @media (min-width: 992px) {    
    flex-direction: row-reverse;
    align-items: center;
    gap: 3rem;
  }

  h3{
    font-size: var(--fs-h3);
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
`
export const TextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 992px) {    
    text-align: justify;
  }
  @media (min-width: 1250px) {    
    padding: 50px;
  }
`
export const Text = styled.p`
  line-height: 25px; /* 150% */
`

export const ButtonResume = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};

  @media (min-width: 1250px) {    
    width: fit-content;
    padding: 10px;
  }
`