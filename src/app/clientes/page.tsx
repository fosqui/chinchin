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

export default function Clientes() {
  return (
    <div>
      <Header />
      <Image src='/fondopc.jpg' alt='servicios-img' width={375} height={100}/>
      <div className="titulo-clientes">
        <h1>Estos son algunos de <b>nuestros clientes.</b></h1>
      </div>
      <div className="clientes">
        <Image src='/otidi.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/raiz.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/outexp.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/fiestarose.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/otidi.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/raiz.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/outexp.jpg' alt='servicios-img' width={375} height={100}/>
        <Image src='/fiestarose.jpg' alt='servicios-img' width={375} height={100}/>
      </div>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}