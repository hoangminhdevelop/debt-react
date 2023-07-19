import React from 'react';
import { convertToVND } from '@/utils/currency';

export type DebtItemProps = {
  name: string;
  icon: string;
  total: number;
};

const DebtItem = ({ name, icon, total }: DebtItemProps) => {
  return (
    <div className="bg-white px-1 py-2 rounded-md shadow-md flex items-center w-full">
      <span className="mr-1 text-2xl">{icon}</span>
      <span>{name}</span>
      <span className="ml-auto">{convertToVND(total)}</span>
    </div>
  );
};

export default DebtItem;
