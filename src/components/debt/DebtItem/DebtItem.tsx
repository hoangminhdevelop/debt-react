import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@/components/ui/card';
import { TDebt } from '@/types/debt';
import { Skeleton } from '@/components/ui/skeleton';

import { Routers } from '@/routes';
import { convertToVND } from '@/utils/currency';
import { cn } from '@/utils/tailwind';
import { getIcon } from '@/helpers/icon';

type DebtItemProps = Omit<HTMLProps<HTMLDivElement>, 'data'> & {
  data: TDebt;
};

const DebtItem = ({ data, className }: DebtItemProps) => {
  const { emoji } = getIcon(data.icon);

  return (
    <div className="w-full">
      <Link to={`${Routers.History}/${data.id}`}>
        <Card className={cn('flex items-center p-common', className)}>
          <span className="text-2xl">{emoji}</span>
          <div className="ml-3">{data.debtName}</div>
          <span
            className={cn('ml-auto font-medium', {
              'text-green-500': data.amount > 0,
              'text-red-500': data.amount <= 0,
            })}
          >
            {convertToVND(data.amount)}
          </span>
        </Card>
      </Link>
    </div>
  );
};

const DebtItemSkeleton = () => {
  return (
    <Card className="p-common">
      <Skeleton className="flex items-center gap-4">
        <div className="rounded-full bg-skeleton h-8 w-8"></div>
        <div className="rounded-lg w-[40%] bg-skeleton00 h-5"></div>
        <div className="ml-auto rounded-lg w-[20%] bg-skeleton h-5"></div>
      </Skeleton>
    </Card>
  );
};

export { DebtItem, DebtItemSkeleton };
