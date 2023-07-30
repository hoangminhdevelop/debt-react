import axios from 'axios';
import { SERVER_URL } from '@/constants/common';
import { getAccessToken } from './JWTService';

export const axiosCall = () => {
  return axios.create({
    baseURL: SERVER_URL,
  });
};

export const axiosPrivateCall = () => {
  const accessToken = getAccessToken();
  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
