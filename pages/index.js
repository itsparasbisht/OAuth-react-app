import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className={styles.container}>
      <h1>Google SignIn</h1>
      <button onClick={() => login()}>Log In</button>
    </div>
  );
}
