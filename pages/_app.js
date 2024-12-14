import Layout from "../components/Layout";
import "../styles/globals.css";
import Script from "next/script";




export default function App({ Component, pageProps }) {
  return (
    <Layout>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-BVDBCM3NQF"></Script>
<Script>
 {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BVDBCM3NQF');`} 
</Script>
      <Component {...pageProps} />
    </Layout>
  );
}
