import { useState } from 'react';
import * as H from './Header'

// Icons
import { BsList, BsX, BsSun, BsMoonStars } from "react-icons/bs";
interface Props {
  light: boolean,
  onClickButton: () => void

}


export const Header:React.FC<Props> = ({light, onClickButton}) => {
  const [ isVisible, setIsVisible] = useState(false)

  const handleNavbar = () => {
    setIsVisible(!isVisible)
  } 

    const handleDownloadCV = () => {
    // Caminho do arquivo do currículo
    const resumeFilePath = '/resume.pdf';

    // Baixar o currículo
    fetch(resumeFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        // Criar um link temporário para download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        // Definir o atributo de download e o nome do arquivo
        link.download = 'resume.pdf';

        // Adicionar o link ao corpo do documento
        document.body.appendChild(link);

        // Simular um clique no link para iniciar o download
        link.click();

        // Remover o link do corpo do documento após o download
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Erro ao baixar o currículo:', error));
  };


  return(
    <H.Container>

      <H.Logo>{'<CS/>'}</H.Logo>

      <H.ButtonMenu onClick={handleNavbar}>
        <BsList style={{fontSize: '28px', fontWeight: '700'}}/>
      </H.ButtonMenu>

      <H.Navbar visible={isVisible}>

        <H.Header>
          <H.Logo>{'<CS/>'}</H.Logo>
          <H.ButtonMenu onClick={handleNavbar}>
            <BsX style={{fontSize: '28px', fontWeight: '700'}}/>
          </H.ButtonMenu>
        </H.Header>

        <H.List>
          <H.Item>About</H.Item>
          <H.Item>Work</H.Item>
          <H.Item>Testemonials</H.Item>
          <H.Item>Contact</H.Item>
        </H.List>

        <H.Mode>
            <span>Switch</span>
            <H.ButtonMode onClick={onClickButton}>
              { 
              light 
              ? 
              <BsSun/> 
            :
            <BsMoonStars style={{color:'#fff'}}/>}
          </H.ButtonMode>

          <H.CV onClick={handleDownloadCV}>Download CV</H.CV>
        </H.Mode>

        
      </H.Navbar>

    </H.Container>
  )
}