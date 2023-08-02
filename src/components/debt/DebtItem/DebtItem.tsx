import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import DeleteDebt from '@/components/forms/DeleteDebt';

import { Routers } from '@/routes';
import { TDebt } from '@/types/debt';
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
      <Card className={cn('flex items-center p-common', className)}>
        <span className="text-2xl">{emoji}</span>
        <Link to={`${Routers.History}/${data.id}`}>
          <div className="ml-3">{data.debtName}</div>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <span
            className={cn('font-medium', {
              'text-green-500': data.amount > 0,
              'text-red-500': data.amount <= 0,
            })}
          >
            {convertToVND(data.amount)}
          </span>
          <DeleteDebt data={data} />
        </div>
      </Card>
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
