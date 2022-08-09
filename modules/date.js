import { DateTime } from './luxon.js';

const dateMonthYear = DateTime.now().toFormat('MMMM dd, yyyy');

const formatTime = () => {
  const { hour } = DateTime.now().toObject();
  let { minute, second } = DateTime.now().toObject();
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;
  return `${dateMonthYear}  ${hour}:${minute}:${second}`;
};

export default formatTime;
