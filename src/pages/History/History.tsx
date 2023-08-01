import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';

import {
  HistoryItem,
  HistoryItemSkeleton,
} from '@/components/history/HistoryItem';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { FilterHistory, historyService } from '@/services/historyService';
import HistoryFilterForm from '@/components/forms/HistoryFilterForm/HistoryFilterForm';
import { Card } from '@/components/ui/card';
import HistoryFilterSheet from '@/components/history/HistoryFilterSheet/HistoryFilterSheet';
import { HistoryFilterDataForm } from '@/components/forms/HistoryFilterForm/HistoryFilterForm.schema';
import CreateHistory from '@/components/forms/CreateHistory/CreateHistory';

import { HistoryType } from '@/types/history';
import { Order } from '@/types/common';
import { ScrollArea } from '@/components/ui/scroll-area';

const History = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuthContext();

  const [historyParams, setHistoryParam] = useState<FilterHistory>({
    debtId: Number(id) ?? undefined,
    start: startOfDay(startOfMonth(new Date())),
    end: endOfDay(endOfMonth(new Date())),
    order: Order.Desc,
  });

  const { data, isLoading } = useQuery({
    queryKey: ['query-history', historyParams],
    queryFn: () => historyService.getHistoryList(historyParams),
    enabled: isAuthenticated,
  });

  const onSubmitFilter = (filterForm: HistoryFilterDataForm) => {
    setHistoryParam({
      ...historyParams,
      start: filterForm.range.from,
      end: filterForm.range.to,
      type: filterForm.type === HistoryType.All ? undefined : filterForm.type,
      order: filterForm.order,
    });
  };

  return (
    <div className="mt-page p-common">
      <div className="flex justify-end items-center gap-2">
        <CreateHistory />
        <HistoryFilterSheet
          defaultValue={historyParams}
          className="block md:hidden"
          onSubmit={onSubmitFilter}
        />
      </div>
      <div className="flex flex-col mt-common md:flex-row-reverse md:gap-3">
        <div className="hidden w-full md:block md:w-1/2 lg:w-2/3">
          <h2 className="mb-common">Filter</h2>
          <Card className="p-common w-full">
            <HistoryFilterForm
              defaultValue={historyParams}
              onSubmit={onSubmitFilter}
            />
          </Card>
        </div>
        <div className="w-full">
          <h2 className="mb-common">History list</h2>
          <ScrollArea className="mt-common h-[calc(100vh_-_180px)]">
            <div className="w-full grid gap-3 grid-cols-1 ">
              {data?.length === 0 && (
                <b className="text-center">Let's create the first history</b>
              )}
              {isLoading &&
                [...new Array(6)].map((_, id) => {
                  return <HistoryItemSkeleton key={id} />;
                })}

              {data?.map((history) => {
                return <HistoryItem key={history.id} data={history} />;
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default History;
