import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [token, setToken] = useState();

  console.log(token);

  useEffect(() => {
    if (token) {
      fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
      ).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    }
  }, [token]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setToken(tokenResponse.access_token);
    },
  });

  return (
    <div className={styles.container}>
      <h1>Google SignIn</h1>
      <button onClick={() => login()}>Log In</button>
    </div>
  );
}
