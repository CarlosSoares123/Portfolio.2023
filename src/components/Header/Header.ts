import styled from "styled-components";

interface openModal {
  visible: boolean
}

export const Container = styled.header`
  width: 100vw;
  background-color: ${props => props.theme.colors.background}; 
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 3;

  @media (min-width: 768px) {
      padding-inline: 5rem;
    }
    @media (min-width: 992px) {
      padding-inline: 3rem;
      padding-block: 16px;
    }
    @media (min-width: 1250px) {
      padding-inline: 7rem;
    }


`
export const Logo = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: var(--fs-logo);
  font-weight: var(--fw-700);
`
export const ButtonMenu = styled.button`
  color: ${props => props.theme.colors.primary};

  @media (min-width: 992px) {
    display: none;
  }
`
export const Navbar = styled.div<openModal>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  transition: .4s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: fixed;
  left: 0;
  top:${({visible}) => (visible ? '0' : '-550px')};
  visibility: ${({visible}) => (visible ? 'visible' : 'hidden')};
  z-index: 4;
  overflow: hidden;

  @media (min-width: 992px) {
    all: unset;
    display: flex;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (min-width: 992px) {
    display: none;
  }
`
export const List = styled.ul`
  padding: 16px;
  display: flex;  
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.text};
  
  @media (min-width: 992px) {
    flex-direction: row;
    border: none;
  }
`
export const Item = styled.li`
  font-size: 18px;
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.colors.primary};
  }
`
export const Mode = styled.div`
  padding-inline: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 18px;
  }

    @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    gap: 40px;

    span{ display: none; }
  }
`
export const ButtonMode = styled.button`
  cursor: pointer;
  font-size: 20px;
`
export const CV = styled.button`
  font-size: 18px;
  font-weight: 500;
  padding: 5px 16px;
  
  border-radius: 12px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};


  @media (min-width: 992px) {
    padding: 6px 16px;

  }
`