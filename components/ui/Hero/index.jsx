import NavLink from "../NavLink"
import image1 from "../../../public/computer.png"
import Image from "next/image"

const Hero = () => (
  <section className="py-10 text-gray-600 relative">
      <div className="custom-screen grid grid-cols-1 md:grid-cols-12 items-center w-full relative">
          <div className="space-y-5 max-w-4xl mx-auto text-center md:text-left md:col-span-4 relative z-10 overflow-visible">
              <h1 className="text-4xl mix-blend-difference  text-slate-900 font-bold  sm:text-8xl whitespace-nowrap overflow-visible">
                 Make website <span className="text-gray-800">simple </span>
              </h1>
              <p className="max-w-xl  mx-auto md:mx-0 md:whitespace-nowrap overflow-visible">
                  Blinder making it simple for you to build and grow your SaaS applications, or any business idea.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-x-3 font-medium text-sm">
                  <NavLink
                      href="/get-started"
                      className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 px-4 py-2 rounded"
                  >
                      Start building
                  </NavLink>
                  <NavLink
                      href="#cta"
                      className="text-gray-700 border hover:bg-gray-50 px-4 py-2 rounded"
                      scroll={false}
                  >
                      Learn more
                  </NavLink>
              </div>
          </div>
          <div className="md:col-span-8  relative">
              <Image
                  src={image1}
                  alt="Descriptive Alt Text"
                  className="w-full h-auto object-cover"
              />
          </div>
      </div>
  </section>
)

export default Hero