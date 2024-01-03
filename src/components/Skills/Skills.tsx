import * as S from './Skills.ts'
import * as G from '../../global.ts'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Skills:React.FC<Props> = ({children}) => {
  return(
    <S.Container>
      <G.Header>
        <G.TitleSection><h2>Skills</h2></G.TitleSection>
        <G.Title>As habilidades, ferramentas e tecnologias nas quais sou realmente bom:</G.Title>
      </G.Header>

      <S.SkillContainer>
        {children}
      </S.SkillContainer>

    </S.Container>
  )
} 