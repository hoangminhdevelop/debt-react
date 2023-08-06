import axios from 'axios';
import { SERVER_URL } from '@/constants/common';
import { getAccessToken } from './JWTService';

export const axiosCall = () => {
  return axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
};

export const axiosPrivateCall = () => {
  const accessToken = getAccessToken();
  return axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
