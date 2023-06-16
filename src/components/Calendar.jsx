import React, { useRef, useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddEventModal } from './AddEventModal';

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
      region: event.region,
      branch: event.branch,
      brand: event.brand,
      credit: event.credit,
    });
    console.log(event);
  };

  const handleClickEvent = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={event => onEventAdded(event)}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleClickEvent}
          headerToolbar={{
            left: 'today,prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
        />
      </div>
    </>
  );
};

export default Calendar;
