import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BVDBCM3NQF"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BVDBCM3NQF');`}
        </Script>
        <title>Collie</title>
        <meta
          name="description"
          content="Collie: Simplifying Your Journey to Build and Grow Your Website "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
