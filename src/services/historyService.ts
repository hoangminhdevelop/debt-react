import { APIResult } from '@/types/service';
import { axiosPrivateCall } from './axiosService';
import { IHistory } from '@/types/history';

interface FilterHistory {
  debtId?: number;
}

class HistoryService {
  async getHistoryList({ debtId, ...input }: FilterHistory) {
    const result = await axiosPrivateCall().get<APIResult<IHistory[]>>(
      '/history',
      {
        params: {
          debt: isNaN(Number(debtId)) ? undefined : Number(debtId),
          ...input,
        },
      },
    );
    return result.data.data;
  }
}

export const historyService = new HistoryService();
