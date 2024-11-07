import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";
import { motion } from "framer-motion";
import { Nunito_Sans} from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito_Sans({ subsets: ['latin'], weight: '400',})




const Navbar = () => {
  const [state, setState] = useState(false);
  const { events } = useRouter();

  const navigation = [
    { title: "Home", path: "#home" },
    { title: "About us", path: "#about" },
    { title: "Workflow", path: "#workflow" },
    { title: "Sample Product", path: "#sample" },
    { title: "Contact Us", path: "#contact" },
  ];

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };
    events.on("routeChangeStart", () => handleState());
    events.on("hashChangeStart", () => handleState());
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
  <motion.div
  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
  >
    <header>
      <nav
        className={` bg-sky-100 fixed z-20  w-full  md:text-sm ${
          state ? "fixed z-10 h-full" : ""
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-1 md:py-2 md:block">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`${nunito.className} flex-1 pb-3 mt-8  md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-8 md:space-y-0 md:text-gray-600 md:font-medium">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-xl tracking-wider duration-150 hover:text-gray-900"
                  >
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </motion.div>
  );
};

export default Navbar;
