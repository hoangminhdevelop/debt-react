import { format } from 'date-fns';

export const formatDateTime = (date: string | Date) => {
  return format(new Date(date), 'dd/MM/yyyy hh-mm');
};
