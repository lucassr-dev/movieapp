import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { to: "/about", label: "Sobre" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <footer className="bg-neutral-600 bg-opacity-35 text-neutral-400 py-4">
      <div className="container mx-auto px-4">
        <nav className="mb-2">
          <ul className="flex justify-center gap-4">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-center">
    Criado por Lucassrdev. &copy; {currentYear} Todos os direitos reservados. 
  </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);