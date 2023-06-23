import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/LandingPage/0/Navbar";
import Footer from "@/components/LandingPage/0/Footer";
import { motion } from "framer-motion";
import { introLeftAnimation, introRightAnimation, videoAnimation, textAnimation } from "@/utils/0/animations";

const One: NextPage = () => {
  return (
    <motion.div className="min-h-screen px-4 md:px-8 lg:px-16 bg-darkGreen text-cream" initial="initial" animate="animate">
      <Head> <title>Home | Team RE</title> </Head>

      <Navbar />

      <main className="grid md:grid-cols-[3fr_1fr] py-2">
        <h1 className="text-4xl md:text-6xl font-bold w-full md:w-[40rem] leading-[90%] tracking">
          <AnimatedWords title="Generate electricity from the sun's." />
        </h1>
        <motion.div className="text-base leading-[150%] self-end hidden md:block" variants={introRightAnimation}>
          We offer a clean, sustainable, and reliable source of electricity that
          can help reduce our dependence on fossil fuels.
        </motion.div>
      </main>
      <motion.video className="w-full rounded-lg" loop autoPlay muted playsInline variants={videoAnimation}>
        {/* <source src='/assets/0/re-energy.mp4' type='video/mp4' />  */}
        <source src={'https://auctions-live.s3.ap-southeast-2.amazonaws.com/re-energy.mp4'} type="video/mp4" />
      </motion.video>
      <Footer />
    </motion.div>
  );
};

type AnimatedWordsProps = {
  title: string;
};

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={introLeftAnimation}>
      {title.split(" ").map((word, index) => (
        <div key={index} className="inline-block overflow-hidden">
          <motion.span className="inline-block overflow-hidden" variants={textAnimation}>{word + "\u00a0"}</motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default One;

