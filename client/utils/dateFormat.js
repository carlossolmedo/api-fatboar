/** Convert date from filter component */
export default function dateFormat(dateComponent) {
  const date = new Date(dateComponent);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  // French format
  return `${day}/${month}/${year}`;
};
