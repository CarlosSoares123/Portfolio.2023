import { BsCopy } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si";
import * as C from './Contact.ts'
import * as G from '../../global.ts'


const copyToClipboard = (content: string) => {
  navigator.clipboard.writeText(content)
  alert(`Conteúdo copiado para a área de transferência: ${content}`);
}

export const Contact = () => {
  return(
    <C.Container>
      <G.Header>
        <G.TitleSection><h2>Contact</h2></G.TitleSection>
        <G.Title>Qual é o próximo? Sinta-se à vontade para entrar em contato comigo se estiver procurando um desenvolvedor, tiver alguma dúvida ou simplesmente quiser se conectar.</G.Title>
      </G.Header>

      <C.ContactAdmin>

        <C.Contacts>
          <C.Contact>
              <span>carlossoarespedro20@gmail.com</span> 
            <C.Button onClick={() => copyToClipboard('carlossoarespedro20@gmail.com')}>
              <BsCopy/>
            </C.Button>
          </C.Contact>
          <C.Contact>
              <span>+244 930289649</span> 
            <C.Button onClick={() => copyToClipboard('+244 930289649')}>
              <BsCopy/>
            </C.Button>
            </C.Contact>
        </C.Contacts>

        <C.SocialMedia>
          <C.ButtonLink href='#'><SiGithub/></C.ButtonLink>
          <C.ButtonLink href='#'><SiLinkedin/></C.ButtonLink>
        </C.SocialMedia>

      </C.ContactAdmin>
    </C.Container>
  )

}