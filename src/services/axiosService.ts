import axios from 'axios';
import { SERVER_URL } from '@/constants/common';

export const axiosCall = axios.create({
  baseURL: SERVER_URL,
});

const axiosCallWithAuth = () => {
  // const accessToken = getAccessToken();
  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      // Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axiosPrivateCall = axiosCallWithAuth();
