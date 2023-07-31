import clsx from 'clsx';
import { Card } from '@/components/ui/card';
import { HistoryType, IHistory } from '@/types/history';
import { format } from '@/utils/datetime';
import { convertToVND } from '@/utils/currency';
import { Skeleton } from '@/components/ui/skeleton';

type HistoryItemProps = {
  data: IHistory;
};

export const HistoryItem = ({ data }: HistoryItemProps) => {
  return (
    <div className="w-full">
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
            {data.type === HistoryType.Increment ? '+' : '-'}&nbsp;
            {convertToVND(data.amount)}
          </span>
        </div>
      </Card>
    </div>
  );
};

export const HistoryItemSkeleton = () => {
  return (
    <Card className="p-common">
      <Skeleton className="flex h-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-[70%] rounded-lg h-4 bg-skeleton"></div>
          <div className="w-full mt-2 rounded-lg h-4 bg-skeleton"></div>
        </div>
        <div className="w-full h-full flex flex-col justify-between items-end">
          <div className="w-[70%] rounded-lg h-4 bg-skeleton"></div>
          <div className="w-[70%] rounded-lg h-4 bg-skeleton"></div>
        </div>
      </Skeleton>
    </Card>
  );
};
