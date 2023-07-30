export const format = (date: string | Date) => {
  return new Intl.DateTimeFormat().format(new Date(date));
};
