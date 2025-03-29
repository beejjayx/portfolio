import { Click } from './styles'

// in Presentation
const ButtonOpenPDF = () => {
  const openPDF = () => {
    window.open('/doc/CV.pdf', '_blank')
  }

  return (
    <Click data-aos="fade-down" data-aos-delay="400" onClick={openPDF}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      CV
    </Click>
  )
}

export default ButtonOpenPDF
