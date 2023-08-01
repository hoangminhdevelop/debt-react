import { axiosCall, axiosPrivateCall } from './axiosService';
import { TDebt } from '@/types/debt';
import { APIResult } from '@/types/service';

export interface CreateDebtInput {
  debtName: string;
  icon?: string;
}

interface CreateDebtResponse {}

class DebtService {
  createDebt(input: CreateDebtInput) {
    return axiosPrivateCall().post<APIResult<CreateDebtResponse>>(
      '/debt',
      input,
    );
  }

  async getDebtList() {
    const result = await axiosPrivateCall().get<APIResult<TDebt[]>>('/debt');
    return result.data.data;
  }

  async deleteDebtById(id: number) {
    const result = await axiosPrivateCall().delete(`/debt/${id}`);
    return result.data;
  }
}

const debtService = new DebtService();

export default debtService;
