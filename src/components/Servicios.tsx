"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';


const Servicios: React.FC = () => {
  return (
    <div className="servicios">
        <div className="nuestros-servicios">
            <h1>Nuestros <br/> Servicios</h1>
        </div>
        <div className="servicios-ofrecidos">
            <Link href="/servicios">
                <div className="social-media">
                    <Image 
                            src="/sm.png"
                            alt="Logo Social Media"
                            fill
                        /> 
                        <h1>Social Media</h1>
                        <p>Sabemos que tenés poco tiempo para manejar tus redes, por eso nosotras las manejamos por vos, ayudandote a viralizar tu marca y conseguir nuevos clientes.</p>
                </div>
            </Link>
            <Link href="/servicios">
                <div className="branding">
                    <Image 
                            src="/br.webp"
                            alt="Logo Branding"
                            fill
                        /> 
                        <h1>Branding</h1>
                        <p>Desde el diseño de logotipos, paleta de colores y tipografía, hasta personalidad, mensaje y valores que reflejen la esencia de tu marca de principio a fin.</p>
                </div>
            </Link>
            <Link href="/servicios">

                <div className="meta-ads">
                    <Image 
                            src="/maa.jpg"
                            alt="Logo Meta Ads"
                            fill
                        /> 
                        <h1>Meta Ads</h1>
                        <p>A través de la publicidad en redes sociales vas a poder aumentar el conocimiento de tu marca, generar tráfico en el sitio web y acciones, como clientes potenciales y ventas.</p>
                </div>
            </Link>
        </div>
    </div>
    
  );
};

export default Servicios;
