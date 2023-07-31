import { HistoryFilter } from '@/components/history/HistoryFilter';
import {
  HistoryItem,
  HistoryItemSkeleton,
} from '@/components/history/HistoryItem';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { historyService } from '@/services/historyService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const History = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuthContext();

  const { data, isLoading } = useQuery({
    queryKey: ['query-history'],
    queryFn: () => historyService.getHistoryList({ debtId: Number(id) }),
    enabled: isAuthenticated,
  });

  return (
    <div className="mt-page p-common">
      <h1>History</h1>
      <div className="flex flex-col mt-common">
        <HistoryFilter className="w-full h-[10vh" />
        <div className="w-full grid gap-3 grid-cols-1 mt-common">
          {isLoading &&
            [...new Array(6)].map((_, id) => {
              return <HistoryItemSkeleton key={id} />;
            })}

          {data?.map((history) => {
            return <HistoryItem key={history.id} data={history} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
