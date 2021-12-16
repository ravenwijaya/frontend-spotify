import Axios from "axios";
import config from "../config";
import { getAccessToken } from "./Token";

export const bati = Axios.create({
  baseURL: `${config.api.baseUrl}`,
});

export const auth = async () => {
  let auth = `${config.api.clientId}:${config.api.clientSecret}`;
  let encodedAuth = btoa(auth);

  const data = await Axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedAuth}`,
    },
    data: "grant_type=client_credentials",
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data;
    });

  return data ? data : null;
};

bati.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
