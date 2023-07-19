import { format } from 'date-fns';

export const formatDateTime = (date: string | Date) => {
  if (!date) return 'Error';
  return format(new Date(date), 'h:mm A - DD(ddd)/MM/yyyy');
};
