import React, { useEffect } from "react";
import Discover from "./Discover";
import { useSelector,useDispatch } from "react-redux";
import { selectUser, login } from "../features/userSlice";
import { auth } from "../utils/Axios";
import { refreshTokenSetup } from "../utils/refreshToken";
export default function Routes() {
  // Here you'd return an array of routes
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth().then(res => {
        dispatch(
          login({
            accessToken: res.access_token,
          })
        );
        refreshTokenSetup(res);
      });
  },[]);

  return <div>{ user && <Discover />}</div>;
}

