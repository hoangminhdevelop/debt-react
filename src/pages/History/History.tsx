import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import HistoryFilter from '@/components/history/HistoryFilterSheet';
import {
  HistoryItem,
  HistoryItemSkeleton,
} from '@/components/history/HistoryItem';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { historyService } from '@/services/historyService';
import HistoryFilterForm from '@/components/forms/HistoryFilterForm/HistoryFilterForm';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HistoryFilterSheet from '@/components/history/HistoryFilterSheet/HistoryFilterSheet';

const History = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuthContext();

  const { data, isLoading } = useQuery({
    queryKey: ['query-history'],
    queryFn: () => historyService.getHistoryList({ debtId: Number(id) }),
    enabled: isAuthenticated,
  });

  const onSubmitFilter = (filterForm: any) => {
    console.log('filterForm :>> ', filterForm);
  };

  return (
    <div className="mt-page p-common">
      <div className="flex justify-between items-center">
        <h1>History</h1>
        <HistoryFilterSheet
          className="block md:hidden"
          onSubmit={onSubmitFilter}
        />
      </div>
      <div className="flex flex-col mt-common">
        <Card className="p-common hidden md:block">
          <HistoryFilterForm onSubmit={onSubmitFilter} />
        </Card>

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
