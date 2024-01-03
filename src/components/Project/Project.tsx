import * as P from './Project.ts'
import * as G from '../../global.ts'

// Icons
import { BsBoxArrowUpRight } from "react-icons/bs";

// Obejcto 
const projectData = [
  {
    title: 'Streaming de música',
    text: 
    'Soares Streaming. Explore funcionalidades como registro, login, upload e reprodução de áudio. Uma amostra de como a tecnologia pode criar uma experiência musical personalizada. Sinta-se à vontade para descobrir e compartilhar sua música favorita neste projeto de demonstração.',
    link: 'https://github.com/CarlosSoares123/Streaming_Music',
    stacks: [
      'Nodejs',
      'uuid',
      'Cors',
      'Multer',
      'Express',
      'Morgan',
      'nodemon',
    ]
  },
  {
    title: 'Sistema de 2FA',
    text: 
    'Este projeto é um sistema de autenticação de dois fatores 2FA desenvolvido usando Node.js, Express e Sequelize. Ele permite que os usuários se registrem, validem seus e-mails e autentiquem suas contas com um código de acesso. Além disso, o sistema oferece autenticação segura com geração de tokens JWT para login.',
    link: 'https://github.com/CarlosSoares123/Sistema_2FA',
    stacks: [
      'Nodejs',
      'JWT',
      'Jest',
      'Axios',
      'Express',
      'Sequelize',
      'MySQL',
      'Sequelize CLI',
      'Bcrypt',
      'Nodemon',
      'Supertest',
      'Nodemailer'
    ]
  },
  {
    title: 'Gerenciamento de Senhas Corporativas',
    text: 
    'Projecto Pessoal. Este Sistema foi projectado para oferecer uma solução eficiente e segura para registro, autenticação e administração de usuários. Com uma arquitetura baseada em princípios RESTful, o projeto implementa recursos avançados, como autenticação por token JWT e recuperação de senha.',
    link: 'https://github.com/CarlosSoares123/Gerenciamento_Senhas_Corporativas',
    stacks: [
    "bcrypt",
    "body-parser",
    "cors",
    "dotenv",
    "express",
    "joi",
    "jsonwebtoken",
    "morgan",
    "mysql2",
    "nodemailer",
    "nodemon",
    "sequelize",
    "swagger-ui-express"
      
    ]
  },
  {
    title: 'NodeBlog',
    text: 
    'NodeBlog" é um projeto de blog desenvolvido utilizando Node.js, Express, Sequelize, Multer e MySQL. Este aplicativo web permite aos usuários criar e visualizar postagens, cada uma contendo um título, descrição e imagem. As imagens são carregadas no servidor e os detalhes da postagem são armazenados de forma segura em um banco de dados MySQL.',
    link: 'https://github.com/CarlosSoares123/uploadImg-multer-sequelize-',
    stacks: [
      'Nodejs',
      'Cors',
      'Sequelize',
      'Sequelize-CLI',
      'Mysql2',
      'Multer',
      'Express',
      'Morgan',
      'nodemon',
    ]
  },
  {
    title: 'Socket.io CRUD',
    text: 
    'Este é um simples CRUD web aplicando conhecimentos de real-time usando o Socket.io e Node js',
    link: 'https://github.com/CarlosSoares123/Socket.io',
    stacks: [
      '@babel/cli',
      '@babel/core',
      '@babel/node',
      '@babel/present-env',
      'Nodejs',
      'Express',
      'socket.io',
      'uuid',
      'nodemon',
    ]
  },
]



export const Project = () => {
  return(
    <P.Container>

      <P.Header>
        <G.TitleSection><h2>Projects</h2></G.TitleSection>
        <G.Title>Alguns dos projetos notáveis que construí:</G.Title>
      </P.Header>

      <P.Projects>
        {
          projectData.map((project, index) => (
            <P.Project key={index}>
            <P.Title>{project.title}</P.Title>
            <P.Text>{project.text}</P.Text>
            
            <P.Cover className='cover'>

              <P.ButtonLink href={project.link} target="_blank">
                <BsBoxArrowUpRight />
              </P.ButtonLink>

              <P.Stacks>
                {
                  project.stacks.map((stack, stackIndex) => (
                    <P.Stack key={stackIndex}>{stack}</P.Stack>
                  ))
                }
              </P.Stacks>
            </P.Cover>
        </P.Project>
          ))
        }
      </P.Projects>

    </P.Container>
  )
}

