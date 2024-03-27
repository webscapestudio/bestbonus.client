export const dateFormat = (date: any) => {
  var d = new Date(date);

  return d.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
