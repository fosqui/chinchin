
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
import Form from '../components/Form'; 




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
      <Footer />
    </div>
  );
}
