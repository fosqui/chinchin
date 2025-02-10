import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton";


const inter = Inter({ subsets: ["latin"] });

export default function Nosotras() {
  return (
    <div>
        <Header />
        <div className="nostras">
            <Image src='/fondo-nosotras.jpg' alt='servicios-img' width={1920} height={512}/>
            <div className="intro">
              <h1>¿Que es ChinChin?</h1>
              <p>En Chin Chin, nos apasiona llevar tu marca más allá de los límites convencionales.
                Con una combinación única de creatividad, estrategia y tecnología, diseñamos 
                soluciones de marketing personalizadas que no solo capturan la atención, 
                sino que también generan resultados tangibles. Cada campaña que creamos está 
                pensada para conectar profundamente con tu audiencia, fortalecer tu presencia 
                digital y maximizar tu impacto en el mercado. ¡Con Chin Chin, tu marca no solo 
                crece, sino que se destaca!</p>
            </div>
          </div>

          <div className="pilares">
              <h1>Nuestros pilares:</h1>
              <p>
                <b>1. Cercanía y comprensión de tu negocio</b> <br />
                En Chin Chin, nos tomamos el tiempo para conocer a fondo tu marca, tus valores y tus objetivos.
                No solo somos un proveedor de servicios, sino un verdadero socio que entiende tu visión y 
                trabaja codo a codo contigo para llevarla a cabo.
              </p>
              <p>
              <b>2. Estrategias personalizadas, no genéricas</b> <br />
                Cada empresa es única, por eso nuestras soluciones de marketing también lo son. En lugar de 
                aplicar estrategias genéricas, diseñamos planes de acción a medida, centrados en las 
                necesidades y características específicas de tu marca y tu audiencia.
              </p>
              <p>
              <b>3. Comunicación transparente y constante</b> <br />
                Creemos que la clave del éxito radica en una comunicación clara y abierta. Estamos siempre 
                disponibles para escuchar tus ideas, responder a tus inquietudes y asegurarnos de que estés 
                completamente al tanto de cada paso del proceso. Para nosotros, cada cliente es una relación 
                a largo plazo, no solo un proyecto.
              </p>
            </div>

            <div className="fundadoras">
              <h1>Las fundadoras de ChinChin</h1>
              <div className="kiki">
                <Image src='/kiki2.jpg' alt='servicios-img' width={1920} height={512}/>
                <h2>Kiki</h2>
                <p>Especialista en Social Media y estrategia de contenido.</p>
              </div>
              <div className="bongi">
                <Image src='/kiki.jpg' alt='servicios-img' width={1920} height={512}/>
                <h2>Bongi</h2>
                <p>Especialista en Social Media y estrategia de contenido.</p>
              </div>
            </div>
        <FloatingWhatsAppButton />
        <Footer />
    </div>
  );
}