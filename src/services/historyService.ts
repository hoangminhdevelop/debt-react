import { APIResult } from '@/types/service';
import { axiosPrivateCall } from './axiosService';
import { HistoryType, IHistory } from '@/types/history';

interface FilterHistory {
  debtId?: number;
}

export interface CreateHistoryInput {
  debtId: number;
  type: HistoryType;
  amount: number;
  reason: string;
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

  async createHistory(input: CreateHistoryInput) {
    const result = await axiosPrivateCall().post<APIResult<IHistory[]>>(
      '/history',
      input,
    );
    return result.data.data;
  }
}

export const historyService = new HistoryService();
