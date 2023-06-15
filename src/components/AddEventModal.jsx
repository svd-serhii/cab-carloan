import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';

export const AddEventModal = ({ isOpen, onClose, onEventAdded }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [credit, setCredit] = useState(0);
  const [day, setDay] = useState(new Date());

  const onSubmit = event => {
    event.preventDefault();

    onEventAdded({
      name,
      brand,
      credit,
      day,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="client name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="car brand"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <input
          placeholder="credit amount"
          value={credit}
          onChange={e => setCredit(e.target.value)}
        />
        <Datetime value={day} onChange={date => setDay(date)} />
        <button>Add event</button>
      </form>
    </Modal>
  );
};
