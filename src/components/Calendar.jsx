import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import { AddEventModal } from './AddEventModal';

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onEventAdded = () => {};

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={event => onEventAdded(evet)}
      />
    </div>
  );
};

export default Calendar;
