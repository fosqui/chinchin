"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const inter = Inter({
  subsets: ["latin"],
});

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-10 pt-8">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">


            <p className={twMerge(inter.className, "text-xl mb-4 font-bold")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="270"
                  width="270"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}


const dummyContent = [
  {
    title: "Un Marketing en Redes Sociales de calidad incrementará notablemente tus ventas",
    description: (
      <>
        <p>
            Las Redes Sociales se han transformado en un canal para captar nuevos clientes y también para fidelizar 
            los existentes. Mediante la dinámica de comunicación que posibilitan tanto Facebook como Instagram y 
            Linkedin, se puede mantener informado al público correcto en el momento correcto sobre los productos 
            o servicios que se ofrecen. Este vínculo cercano e informal es algo que el consumidor moderno valora 
            muy positivamente.
        </p>
        <p>
            Hoy en día, toda empresa necesita una imagen sólida en Internet y esto requiere de una adecuada presencia
             en redes sociales que complemente el posicionamiento en Google.
        </p>
      </>
    ),

    image:
      "/serv1.png",
  },
  {
    title: "Campañas Basadas en Datos",
    description: (
      <>
        <p>
        Las plataformas Publicitarias de todas las Redes Sociales ofrecen detalladas estadísticas sobre
         el funcionamiento de cada una de las campañas y anuncios.
        </p>
        <p>
            Mediante el uso de herramientas para la creación de audiencias personalizadas y de usuarios frecuentes, 
            podemos orientar las acciones de marketing al público correcto en el momento correcto. Aprovechamos al 
            máximo las opciones de Remarketing, anunciando tanto a quienes llegan desde las redes sociales, como a 
            quienes ingresaron en forma directa a la web.
        </p>
      </>
    ),
    image:
    "/serv2.png",
},
  {
    title: "Factores para un Social Media Manager Exitoso",
    description: (
      <>
        <p>
            Actualmente, las plataformas publicitarias de Facebook Ads, Linkedin Ads y Twitter ads; han desarrollado 
            sofisticados sistemas de formación de audiencias y estrategias de campañas que combinadas permiten lograr 
            los objetivos de venta de cualquier producto o servicio.
        </p>
        <p>
            Hoy en día, muchas empresas PyME comienzan a manejar su fan page con contenido sobre el negocio, y cuando un 
            post ha logrado un buen engagement, reciben un mensaje automático alentando a agregarle publicidad. Esta es 
            una técnica astuta de las distintas redes sociales para iniciarlos en la inversión publicitaria. Sin embargo,
             es importante resaltar que el uso eficiente de estas herramientas publicitarias requiere de un conocimiento 
             avanzado que muchas veces el empresario carece. Es ahí donde resulta clave el acompañamiento de una agencia 
             de redes sociales con experiencia como Seonet, para de este modo alcanzar al público adecuado en el momento 
             adecuado, logrando un aumento de las consultas y por consiguiente de las ventas.
        </p>
        <p>
             En ChinChin, ofrecemos un servicio personalizado de Social Media Management, aportando lo que tu empresa necesita 
             para lograr una Publicidad en Redes Sociales exitosa.
        </p>
      </>
    ),
    image:
    "/serv3.png",
},
];
