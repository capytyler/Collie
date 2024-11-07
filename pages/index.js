import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import ToolKit from "../components/ui/ToolKit";
import Com from "../components/ui/Com";
import Info from "../components/ui/Info";
import Sample from "../components/ui/Sample";
import Flow from "../components/ui/Flow";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <Head>
        <meta name='Hello' content='index' />
      </Head>
      <Hero />

      
        <Features />
        <CTA />
   
      <ToolKit />
      <Flow />
   
      <Sample />
      <Com/>
      <FooterCTA />
      <Info />
    </motion.div>
  );
}