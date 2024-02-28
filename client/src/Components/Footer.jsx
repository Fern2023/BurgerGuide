import React from 'react';
import ContactUsButton from './ContactUs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cbb26a py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="footer-section">
          <h4 className="text-cbb26a text-lg font-bold">Impressum</h4>
          <p className="text-cbb26a text-xs">BurgerGuide</p>
          <p className="text-cbb26a text-xs">WBS WDG14</p>
          <p className="text-cbb26a text-xs">Email</p>
          <p className="text-cbb26a text-xs">Telefonnummer</p>
          {/* Weitere Impressum-Informationen hier */}
        </div>

        <div className="footer-section">
          <h4 className="text-cbb26a text-lg font-bold" >Copyright © {currentYear}</h4>
          <p className="text-xs text-cbb26a">All Rights reserved.</p>
        </div>

        <div className="footer-section">
          <h4 className="text-cbb26a font-bold">Data Policy</h4>
          <p className="text-cbb26a text-xs">Datenschutzbestimmungen hier.</p>
        </div>
        <ContactUsButton />
      </div>


    </footer>
  );
};

export default Footer;