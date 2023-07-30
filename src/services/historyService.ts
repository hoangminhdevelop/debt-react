import { APIResult } from '@/types/service';
import { axiosPrivateCall } from './axiosService';
import { IHistory } from '@/types/history';

class HistoryService {
  async getHistoryList() {
    const result = await axiosPrivateCall().get<APIResult<IHistory[]>>(
      '/history',
    );
    return result.data.data;
  }
  async getHistoryListById(id: number) {
    const result = await axiosPrivateCall().get<APIResult<IHistory[]>>(
      `/history/${id}`,
    );
    return result.data.data;
  }
}

export const historyService = new HistoryService();
