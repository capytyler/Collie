import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

 
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        
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
