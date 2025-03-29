import ContactInfo from './styles'

import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/git.png'
import instagram from '../../assets/images/insta.png'

const Contact = () => {
  const sendEmail = () => {
    window.location.href = 'mailto:benjidelrei@outlook.com'
  }

  // data-aos="fade-down"
  return (
    <ContactInfo>
      <div>
        <h1>Me mande uma mensagem!</h1>
        <p>
          Gostaria de contratar meus serviços, tem alguma pergunta ou só quer
          entrar em contato? Me mande um e-mail ou uma mensagem em uma das
          minhas redes sociais! 🙂
        </p>
        <button onClick={sendEmail}>
          <span>Diga Oi</span>
        </button>
        <br />
        <a href="https://www.linkedin.com/in/benjirei/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/beejjayx">
          <img src={github} alt="" />
        </a>
        <a href="https://www.instagram.com/benjidelrei">
          <img src={instagram} alt="" />
        </a>
      </div>
    </ContactInfo>
  )
}

export default Contact
