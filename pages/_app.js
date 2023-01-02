import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/globals.css";

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID_OAUTH;

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
