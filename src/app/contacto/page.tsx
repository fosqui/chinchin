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

export default function Contacto() {
  return (
    <div>
      <Header />
      <Image src='/servicios2.jpg' alt='servicios-img' width={375} height={100}/>
      <Form />
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}