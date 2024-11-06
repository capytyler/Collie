import Link from "next/link";
import Image from "next/image";

import collie from "../../../public/collie.png"


const Brand = () => (
    <Link href="/">
      
        <Image
        src={collie}
        width={150}
        height={50}
        alt="Blinder logo"
        />
    </Link>
)
export default Brand