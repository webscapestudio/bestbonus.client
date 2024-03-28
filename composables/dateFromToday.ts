export const useDateFromToday = (date: any) => {
  var d = new Date(date);
  let today = new Date();
  let days = d.getDate() - today.getDate();

  return days;
};
