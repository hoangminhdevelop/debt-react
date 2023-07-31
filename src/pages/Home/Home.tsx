import { useQuery } from '@tanstack/react-query';

import { DebtItemSkeleton, DebtItem } from '@/components/debt/DebtItem';
import CreateDebt from '@/components/forms/CreateDebt';
import debtService from '@/services/debtService';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';

// -- Components --

const Home = () => {
  const { isAuthenticated } = useAuthContext();
  const { data, isLoading } = useQuery({
    queryKey: ['query-debt-list'],
    queryFn: debtService.getDebtList,
    enabled: isAuthenticated,
  });

  return (
    <div className="mt-common p-common">
      <div className="flex items-center justify-between">
        <h1>Debt list</h1>
        <CreateDebt />
      </div>
      <div>
        <div>
          <div>
            <span>You have {data?.length ?? 0} debts</span>
          </div>

          <div className="mt-common grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isLoading &&
              [...new Array(5)].map((_, id) => {
                return <DebtItemSkeleton key={id} />;
              })}
            {data?.map((debt) => {
              return <DebtItem key={debt.id} data={debt} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
