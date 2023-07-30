import { useQuery } from '@tanstack/react-query';

import { DebtItemSkeleton, DebtItem } from '@/components/debt/DebtItem';
import CreateDebt from '@/components/forms/CreateDebt';
import { Card } from '@/components/ui/card';
import debtService from '@/services/debtService';

// -- Components --

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['query-debt-list'],
    queryFn: debtService.getDebtList,
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Debt list</h1>
        <CreateDebt />
      </div>
      <div></div>
      <div>
        <div>
          <div>
            <span>You have {data?.length ?? 0} debts</span>
          </div>

          <Card className="p-common flex flex-col md:flex-row md:flex-wrap">
            {isLoading &&
              [...new Array(5)].map((_, id) => {
                return <DebtItemSkeleton key={id} />;
              })}
            {data?.map((debt) => {
              return <DebtItem key={debt.id} data={debt} />;
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
