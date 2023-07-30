import { Card } from '@/components/ui/card';
import { HistoryType, IHistory } from '@/types/history';
import { format } from '@/utils/datetime';
import { convertToVND } from '@/utils/format';
import clsx from 'clsx';

type HistoryItemProps = {
  data: IHistory;
};

export const HistoryItem = ({ data }: HistoryItemProps) => {
  return (
    <Card className="p-common flex gap-3 items-center">
      <div className="flex flex-col">
        <span>Debt: {data.debtId}</span>
        <span>Reason: {data.reason}</span>
      </div>
      <div className="ml-auto flex flex-col">
        <span className="text-sm">{format(data.createdAt)}</span>
        <span
          className={clsx('font-bold', {
            'text-green-500': data.type === HistoryType.Increment,
            'text-red-500': data.type === HistoryType.Decrement,
          })}
        >
          {data.type === HistoryType.Increment ? '+' : '-'}{' '}
          {convertToVND(data.amount)}
        </span>
      </div>
    </Card>
  );
};

export const HistoryItemSkeleton = () => {};
