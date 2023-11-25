import React from 'react';

const BarFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logoContainer">
          <img
            src="/path/to/bar_logo.png"  // Sostituisci con il percorso del logo del bar
            alt="Bar Logo"
            className="logo"
          />
        </div>
        <div className="infoContainer">
          <h3 className="barName">Nome del Bar</h3>
          <p className="address">Indirizzo del Bar, Città</p>
          <p className="contact">Telefono: xxx-xxx-xxxx</p>
        </div>
      </div>
    </footer>
  );
};

export default BarFooter;
