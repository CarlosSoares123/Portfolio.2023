import * as H from './Hero.ts'

  // Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

// Image


export const Hero = () => {
  return (
    <H.Container>
      <H.Text>
        <H.Title>Olá! Sou Carlos Soares</H.Title>
        <p>Desenvolvedor web Full Stack com um ano de imersão no universo do desenvolvimento de software. Minha jornada começou como uma jornada autodidata, e desde então, tenho canalizado minha energia no frontend e backend, explorando as nuances do React.js e node js, enquanto também me aventuro em outros sectores.</p>

        <H.Media>
        <H.ButtonLink href='https://github.com/CarlosSoares123' target="_blank">
          <BsGithub/>
        </H.ButtonLink>
        <H.ButtonLink href='https://www.linkedin.com/in/carlos-soares-8a1758290/' target="_blank">
          <BsLinkedin/>
        </H.ButtonLink>
      </H.Media>
      </H.Text>
    </H.Container>
  )
}