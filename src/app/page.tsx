import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MainSection from '../components/MainSection';
import FlipTextDemo from '../components/FlipTextDemo';
import FlipTextDemo2 from '../components/FlipTextDemo2';
import FlipTextDemo3 from '../components/FlipTextDemo3';
import Servicios from '../components/Servicios';
import AnimatedTestimonials from '../components/AnimatedTestimonials';
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import Footer from '../components/Footer';
import Form from '../components/Form'; // Importa el nuevo componente Form
import ThreeDCardDemo from '../components/ThreeDCardDemo';
import AnimatedPinDemo from '../components/AnimatedPinDemo'; 
import MacbookScrollDemo from '../components/MacbookScrollDemo';



const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <FlipTextDemo />
      <FlipTextDemo2 />   
      <FlipTextDemo3 />   
      <MainSection />
      <Servicios />
      <AnimatedTestimonials />
      <FloatingWhatsAppButton />
      <Form />
      {/*<MacbookScrollDemo />
      <Section id="social-media" title="Relleno" backgroundColor="#2e2e2e">
            <h3>Que es el Social Media?</h3>
            <p>El social media es blalvaldaldmwmdlwad dada  dawda da da.</p>
      </Section>
      
      <Section id="sobre-nosotras" title="Sobre Nosotras" backgroundColor="#000000"hasSlide={false}>
        <div className="team">
            <ThreeDCardDemo />

            <ThreeDCardDemo />
          </div>          

      </Section>
      <div className="contact-section">
        <div className="form-container">
          <Form />
        </div>
        <div className="pin">
          <AnimatedPinDemo />
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}
