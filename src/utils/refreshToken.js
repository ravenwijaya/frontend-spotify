import { auth } from "./Axios";
import { setAccessToken } from "../utils/Token";

export const refreshTokenSetup = (res) => {
  let refreshTiming = res.expires_in * 1000;

  const refreshToken = async () => {
    const newAuthRes = await auth();
    refreshTiming = newAuthRes.expires_in * 1000;
    setAccessToken(newAuthRes.access_token);
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};
