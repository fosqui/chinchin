import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";


const inter = Inter({ subsets: ["latin"] });

export default function Clientes() {
  return (
    <div>
      <Header />
      <Image src='/fondopc.jpg' alt='servicios-img' width={1920} height={512}/>
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