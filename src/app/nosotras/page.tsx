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

export default function Nosotras() {
  return (
    <div>
        <Header />
        <div className="nostras">
            <Image src='/fondo-nosotras.jpg' alt='servicios-img' width={375} height={100}/>
            <h1>dawdaw</h1>
        </div>
        <FloatingWhatsAppButton />
        <Footer />
    </div>
  );
}