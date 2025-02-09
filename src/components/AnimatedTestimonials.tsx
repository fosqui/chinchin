import { style } from "motion/react-client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {

      name: "OTIDI",
      designation: "Ropa de mujeres y por mujeres",
      src: "/otidi.jpg",
    },
    {

      name: "Out Experience",
      designation: "La noche en Capital Federal",
      src: "/outexp.jpg",
    },
    {

      name: "Óptica Obali",
      designation: "Anteojos para todos",
      src: "/optica.jpg",
    },
    {

      name: "Raiz Café",
      designation: "Café de especialidad",
      src: "/raiz.jpg",
    },
    {

      name: "Fiesta RoseGirls",
      designation: "La mejor fiesta de lesbianas",
      src: "/fiestarose.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
