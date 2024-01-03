// Style
import GlobalStyle from './global.ts'

import {darkTheme, lightTheme} from './theme.ts'
import { useState} from'react'
import { ThemeProvider } from 'styled-components'

// Components 
import { Header } from './components/Header/Header.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { About } from './components/About/About.tsx'
import { Skills } from './components/Skills/Skills.tsx'
import { Skill } from './components/Skills/components/Skill.tsx'
import { Project } from './components/Project/Project.tsx'
import { Contact } from './components/Contact/Contact.tsx'


function App() {
  const [ theme, setTheme ] = useState<boolean>(true)

  const handleToggleTheme = () => {
    setTheme(!theme)
  }
  return (      
    <ThemeProvider theme={theme ? lightTheme : darkTheme }>
      <GlobalStyle/>
      <Header 
      light={theme} 
      onClickButton={handleToggleTheme}/>
      <Hero/>
      <About/>
      <Skills>
        <Skill/>
      </Skills>
      <Project/>
      <Contact/>
    </ThemeProvider>
  )
}

export default App
