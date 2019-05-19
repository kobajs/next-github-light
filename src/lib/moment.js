import moment from "moment";

export function formattedDate(date) {
  return moment(date).format('DD/MM/YYYY')
}

export function timeFromNow(date) {
  return moment(date).fromNow();
}

export default moment;
