import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cab-svd-api.onrender.com',
});

export const getEvents = async () => {
  const { data } = await instance.get('/api/calendar/');

  return data;
};

export const addEvent = async event => {
  const { data } = await instance.post('/api/calendar/add', event);
  return data;
};

export const deleteEVent = async id => {
  const { data } = await instance.delete(`/api/calendar/${id}`);
  return data;
};

export const patchEvent = async event => {
  const { data } = await instance.patch(`/api/calendar/${event.id}`, {
    title: event.title,
    start: event.start,
    end: event.end,
    brand: event.brand,
    credit: event.credit,
    region: event.region,
    branch: event.branch,
  });
  return data;
};
