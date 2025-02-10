import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form2 from '../../components/Form2'; 
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importamos los íconos de FontAwesome

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <div>
      <Header />
      <Image src='/contacto.png' alt='servicios-img' width={1920} height={512} />
      <div className="contacto">
        <h1>Conectamos tu marca con el cliente ideal.</h1>
      </div>
      <div className="contacto-redes">
        <h1>Nuestras Redes</h1>
        <div className="redes-links">
          <a href="https://www.instagram.com/chinchinestudiocreativo/" target="_blank" rel="noopener noreferrer" className="redes-link">
            <FaInstagram size={24} /> ChinChin
          </a>
          <a href="https://wa.me/5492214003572" target="_blank" rel="noopener noreferrer" className="redes-link">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
          <a href="mailto:contact@chinchinestudio.com" className="redes-link">
            <FaEnvelope size={24} /> contact@chinchinestudio.com
          </a>
        </div>
      </div>
      <Form2 />
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}
