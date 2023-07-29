import { AxiosResponse } from 'axios';
import { axiosPrivateCall } from './axiosService';
import { APIResult } from '@/types/service';

export interface CreateDebtInput {
  debtName: string;
  icon?: string;
}

interface CreateDebtResponse {}

class DebtService {
  createDebt(input: CreateDebtInput) {
    return axiosPrivateCall.post<APIResult<CreateDebtResponse>>('/debt', input);
  }
}

const debtService = new DebtService();

export default debtService;
