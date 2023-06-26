import React, { useRef, useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddEventModal } from './AddEventModal';
import {
  addEvent,
  getEvents,
  updateEvents,
} from '../redux/events/eventsOperations';

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

  function handleEventAdd(data) {
    console.log(data.event);
    addEvent(data.event);
  }

  const events = getEvents();

  const handleDateClick = () => {
    setModalOpen(true);
  };

  const handleEventClick = info => {
    info.jsEvent.preventDefault();
    if (info.event.title) {
      setModalOpen(true);
    }
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
          events={events}
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // datesSet={data => handleDataSet(data)}
          eventAdd={event => handleEventAdd(event)}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
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
