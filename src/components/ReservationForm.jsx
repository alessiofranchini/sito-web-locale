import React from 'react';

const ReservationForm = () => {
  return (
    <div className="reservation-form mt-5">
      <h2 className='text-center mb-4'>Prenota il tuo tavolo</h2>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" placeholder="Il tuo nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="La tua email" />

        <label htmlFor="phone">Telefono:</label>
        <input type="tel" id="phone" name="phone" placeholder="Il tuo numero di telefono" />

        <label htmlFor="date">Data:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Orario:</label>
        <input type="time" id="time" name="time" />

        <label htmlFor="guests">Numero di ospiti:</label>
        <input type="number" id="guests" name="guests" min="1" />

        <button type="submit">Prenota</button>
      </form>
    </div>
  );
};

export default ReservationForm;
