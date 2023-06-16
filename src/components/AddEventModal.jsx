import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';

export const AddEventModal = ({ isOpen, onClose, onEventAdded }) => {
  const [region, setRegion] = useState('');
  const [branch, setBranch] = useState('');
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [credit, setCredit] = useState(Number);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = event => {
    event.preventDefault();

    onEventAdded({
      title,
      start,
      end,
      extendedProps: { brand, credit, region, branch },
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="прізвище клієнта"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="вказати який автомобіль"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <input
          placeholder="вказати місто угоди"
          value={region}
          onChange={e => setRegion(e.target.value)}
        />
        <input
          placeholder="вказати відділення"
          value={branch}
          onChange={e => setBranch(e.target.value)}
        />
        <input
          placeholder="загальна сума кредиту"
          value={credit}
          onChange={e => setCredit(e.target.value)}
        />
        <Datetime value={start} onChange={date => setStart(date)} />
        <Datetime value={end} onChange={date => setEnd(date)} />
        <button>Add event</button>
      </form>
    </Modal>
  );
};
