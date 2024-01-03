import * as H from './About.ts'
import * as G from '../../global.ts'

export const About = () => {
  return(
    <H.Container>
      <H.TextCotainer>
        <G.TitleSection><h2>About</h2> </G.TitleSection>
        <G.Title>Curioso sobre mim? Aqui está:</G.Title>
        <H.Text>
          
          Introdução Equilibrada:

          Olá, sou Carlos Celestino António Soares, e desde 2022, tenho trilhado ativamente o caminho da programação. Essa jornada não é apenas uma busca por conhecimento, mas uma paixão que tenho cultivado.

          Minha abordagem para o trabalho é marcada por um comprometimento sólido, resolução de problemas e na incessante busca pela inovação. Acredito que o software tem o poder de transformar vidas, indo além de linhas de código para ser uma ferramenta verdadeiramente impactante. Meu objetivo é ser um desenvolvedor que não apenas cria soluções, mas que, por meio da inovação, adiciona valor em todos os lugares por onde passa.
          
        </H.Text>
      </H.TextCotainer>
    </H.Container>
  )
}