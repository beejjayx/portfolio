import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutSection, { Content } from './style'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: 'ease' })
  }, [])

  return (
    <AboutSection>
      <h1 data-aos="fade-down">O QUE TENHO FEITO</h1>
      <Content>
        <p data-aos="fade-left" data-aos-delay="500">
          Olá! Meu nome é Benji, tenho 26 anos e eu crio arte para web 😊.
          <br />
          Minha paixão pela tecnologia que começou lá na infância quando tentei
          instalar os primeiros jogos no computador que meu pai usava para
          trabalhar. Essa curiosidade foi só crescendo, e após o ensino médio
          técnico mergulhei fundo em programação e design, criação de APIs e
          integração Front e Back-end. <br />
          Trabalhar remotamente aprimorou minha organização, enquanto o estudo
          de desenho elevou minha criatividade para criar designs inovadores.
        </p>
        <p data-aos="fade-left" data-aos-delay="800">
          Em resumo, sou movido pela vontade de resolver problemas e transformar
          ideias em realidade – sempre com soluções criativas e eficientes que
          façam a diferença no mercado tech.
        </p>
        <p data-aos="fade-left" data-aos-delay="1100">
          Algumas tecnologias que estou usando:
        </p>
        <div>
          <ul data-aos="fade-left" data-aos-delay="1300">
            <li>HTML</li>
            <li>Spring Boot</li>
            <li>TypeScript</li>
          </ul>
          <ul data-aos="fade-left" data-aos-delay="1400">
            <li>Node.js</li>
            <li>React.js</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </Content>
    </AboutSection>
  )
}
export default About
