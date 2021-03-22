/** Convert date from filter component */
const dateFormat = (dateComponent) => {
  const date = new Date(dateComponent);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  // French format
  return `${day}/${month}/${year}`;
};

const dateLastConnection = (dateComponent) => {
  const dateFr = dateFormat(dateComponent);
  const dateTime = new Date(dateComponent);
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const dateLastConnection = `${dateFr} ${hours}:${minutes}:${seconds}`;
  return dateLastConnection;
}

export default {
  dateFormat,
  dateLastConnection
}
