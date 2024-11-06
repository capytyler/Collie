import { Quicksand} from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '300',})




const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10  border-t items-center justify-between sm:flex">
        <p className="text-gray-600">
          © 2024 Collie Startup. All rights reserved.
        </p>
        <div className={`${quick.className} py-10 text-7xl`}>
        Collie
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;