import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../../components/Header';
import TracingBeamDemo from '../../components/TracingBeamDemo';
import Footer from '../../components/Footer';
import Form from '../../components/Form'; 
import ThreeDCardDemo from '../../components/ThreeDCardDemo';
import AnimatedPinDemo from '../../components/AnimatedPinDemo'; 
import MacbookScrollDemo from '../../components/MacbookScrollDemo';
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";


const inter = Inter({ subsets: ["latin"] });

export default function Servicios() {
  return (
    <div>
      <Header />
      <div className="titulo-servicios">
        <Image src='/servicios2.jpg' alt='servicios-img' width={1920} height={512}/>
        <h1>Soluciones creativas para impulsar tu negocio.</h1>
      </div>
      <TracingBeamDemo />

      <Footer />
    </div>
  );
}
