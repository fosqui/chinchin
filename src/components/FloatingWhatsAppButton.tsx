import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492214003572" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-[1000]"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default FloatingWhatsAppButton;
