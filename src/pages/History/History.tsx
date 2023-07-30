import { HistoryItem } from '@/components/history/HistoryItem';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { historyService } from '@/services/historyService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const History = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuthContext();

  const { data: allHistory } = useQuery({
    queryKey: ['query-history'],
    queryFn: historyService.getHistoryList,
    enabled: isAuthenticated && !id,
  });

  const { data: historyListByID } = useQuery({
    queryKey: ['clear', id],
    queryFn: () => historyService.getHistoryListById(Number(id)),
    enabled: isAuthenticated && !!id,
  });

  const historyList = id ? historyListByID : allHistory;

  return (
    <div className="mt-page p-common">
      <h1>History</h1>
      <div className="flex flex-col gap-3">
        {historyList?.map((history) => {
          return <HistoryItem key={history.id} data={history} />;
        })}
      </div>
    </div>
  );
};

export default History;
