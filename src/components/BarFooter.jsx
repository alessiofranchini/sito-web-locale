import React from 'react';
import logo from '../assets/img/logo.jpg';

const BarFooter = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <img src={logo} alt="Logo" height="200" />
        </div>
        <div>
          <h3>Cocktail corner</h3>
          <p>Roma</p>
          <p>Telefono: 222-344-1234</p>
        </div>
      </div>
    </footer>
  );
};

export default BarFooter;
