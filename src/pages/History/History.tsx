import React from 'react';
import DebtHistory from '@/components/debt/DebtHistory';
import { iconList } from '@/constants/icons';

const History = () => {
  return (
    <div className="bg-white mt-1">
      <div className="flex gap-1 flex-col w-full p-1 h-full">
        {[...new Array(10)].map((e, i) => {
          return (
            <DebtHistory
              type={i % 2 ? 'increment' : 'decrement'}
              amount={i}
              icon={iconList[i]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default History;
