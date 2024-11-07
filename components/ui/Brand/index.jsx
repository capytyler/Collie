import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import collie from "../../../public/collie2.png";

const Brand = () => {
  return (
    <Link href="/">
      <motion.div
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={collie}
          width={150}
          height={50}
          alt="Blinder logo"
        />
      </motion.div>
    </Link>
  );
};

export default Brand;