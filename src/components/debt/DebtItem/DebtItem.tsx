import { Card } from '@/components/ui/card';
import clsx from 'clsx';
import { iconList } from '@/constants/icons';
import { TDebt } from '@/types/debt';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { Routers } from '@/routes';
import { convertToVND } from '@/utils/format';

type DebtItemProps = {
  data: TDebt;
};

const DebtItem = ({ data }: DebtItemProps) => {
  const icon = iconList.find((i) => i.value === data.icon) ?? iconList[0];

  return (
    <Link to={`${Routers.History}/${data.id}`}>
      <Card className="flex items-center p-common">
        <span className="text-2xl">{icon.emoji}</span>
        <div className="ml-3">{data.debtName}</div>
        <span
          className={clsx('ml-auto font-medium', {
            'text-green-500': data.amount > 0,
            'text-red-500': data.amount <= 0,
          })}
        >
          {convertToVND(data.amount)}
        </span>
      </Card>
    </Link>
  );
};

const DebtItemSkeleton = () => {
  return (
    <Card className="p-common">
      <Skeleton className="flex items-center gap-4">
        <div className="rounded-full bg-slate-200 h-8 w-8"></div>
        <div className="rounded-lg w-[40%] bg-slate-200 h-5"></div>
        <div className="ml-auto rounded-lg w-[20%] bg-slate-200 h-5"></div>
      </Skeleton>
    </Card>
  );
};

export { DebtItem, DebtItemSkeleton };
