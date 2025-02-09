"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Cross as Hamburger } from 'hamburger-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Maneja el clic en el menú
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Maneja el clic en un enlace para cerrar el menú si está abierto
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/" onClick={handleLinkClick}>
            <Image 
              src="/logo.jpg"
              alt="Logo de San Cristobal"
              fill
            />
            <div className="title-container">
              <h1>ChinChin</h1>
              <p>Estudio Creativo</p>
            </div>
          </a>
        </div>

        {/* Contenedor que agrupa el ícono y el texto */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <Hamburger toggled={isMenuOpen} size={17} />
          <h1 className="menu-text">{isMenuOpen ? "CERRAR" : "MENU"}</h1>
        </div>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul className="nav-links">
          <li><a href="/" onClick={handleLinkClick}>INICIO</a></li>
          <li><a href="/servicios" onClick={handleLinkClick}>SERVICIOS</a></li>
          <li><a href="/clientes" onClick={handleLinkClick}>CLIENTES</a></li>
          <li><a href="/nosotras" onClick={handleLinkClick}>SOBRE NOSOTRAS</a></li>
          <li><a href="/contacto" onClick={handleLinkClick}>CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
