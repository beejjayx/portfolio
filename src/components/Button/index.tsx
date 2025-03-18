import { Click } from "./styles";

// in Presentation

const ButtonOpenPDF = () => {
    const openPDF = () => {
        window.open('/doc/CV.pdf', '_blank')
    };

    return <Click onClick={openPDF}>Currículo</Click>
}

export default ButtonOpenPDF