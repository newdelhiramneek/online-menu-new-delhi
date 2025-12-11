import React from "react";

const Footer = () => {
  return (
    <footer className="menu-footer">
      <div className="footer-columns">
        <div>
          <h4>New Delhi</h4>
          <p>Beispielstraße 12<br />12345 Musterstadt</p>
        </div>
        <div>
          <h4>Öffnungszeiten</h4>
          <p>Mo–Fr: 11:30–22:30<br />Sa–So: 12:00–23:00</p>
        </div>
        <div id="contact">
          <h4>Kontakt</h4>
          <p>Tel: 01234 / 567890<br />E-Mail: info@newdelhi.de</p>
        </div>
      </div>

      <div id="allergen" className="footer-allergen">
        <h5>Allergenlegende</h5>
        <p>
          A – glutenhaltiges Getreide · B – Krebstiere · C – Eier · D – Fisch ·
          E – Erdnüsse · F – Soja · G – Milch · H – Schalenfrüchte · I – Sellerie ·
          J – Senf · K – Sesamsamen · L – Schwefeldioxid & Sulfite · M – Lupinen · N – Weichtiere
        </p>
        <p className="footer-note">
          Trotz sorgfältiger Zubereitung können Spuren anderer Allergene nicht ausgeschlossen werden.
        </p>
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} New Delhi – Digital Menu</p>
    </footer>
  );
};

export default Footer;
