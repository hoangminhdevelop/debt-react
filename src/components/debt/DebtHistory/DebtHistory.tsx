import React from 'react';
import { iconList } from '@/constants/icons';
import { convertToVND } from '@/utils/currency';
import { formatDateTime } from '@/utils/date-time';

type DebtHistoryProps = {
  amount: number;
  type: 'increment' | 'decrement';
  icon: (typeof iconList)[number];
};
const DebtHistory = ({ amount, type, icon }: DebtHistoryProps) => {
  return (
    <div className="relative flex items-center bg-white rounded-md px-1 py-1 border-b-2 border-disable border-solid">
      <span className="inline-block text-2xl mr-1">{icon.emoji}</span>
      <span>{icon.label}</span>
      <span className="ml-auto">
        {type === 'increment' ? '➕' : '➖'} {convertToVND(amount * 1000000)}
      </span>
      <div>
        <span>{formatDateTime(new Date())}</span>
      </div>
    </div>
  );
};

export default DebtHistory;
