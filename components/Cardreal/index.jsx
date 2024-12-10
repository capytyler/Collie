'use client';

import Card from '../../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import lab from '../../public/lab.gif'
import personal from '../../public/personal.gif'
import med from '../../public/med.gif'
import { Quicksand} from '@next/font/google'
const quick = Quicksand({ subsets: ['latin'], weight: '500',})


const projects = [
    {
      title: "Organisation ",
      subtitle:'Laboratory',
      description: "Neuroscience is fascinating, but you might think this laboratory website is spectacular. People come, people go - no worries! The boss can easily edit the member list of the website.",
      src: lab,
      link: "https://chenglab.vercel.app/",
      color: "#BBACAF"
    },
    {
      title: "Organisation ",
      subtitle:'Medical Center',
      description: "Wanna see a doctor in Vietnam? Go to Ho's Medical Center. They provide all-around intensive care to the patients. Visit this website for more.",
      src: med,
      link: "https://www.homed.health/",
      color: "#977F6D"
    },
    {
      title: "Personal Website",
      subtitle:'',
      description: "As an elite in the public relations industry, a fancy personal website is inevitable. Julia Chan is smart and capable; after visiting her website, you might just find yourself her biggest fan.",
      src: personal,
      link: "https://collieweb.github.io/Julia3/index.html",
      color: "#C2491D"
    },
  
  ]


export default function Cardreal() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (

    <div className={`${quick.className}`} id='sample'>

      <main  ref={container} >
      <h1 className="text-3xl  sm:pt-24  font-semibold sm:text-5xl tracking-wider   text-center ">
        Sample Website
      </h1>
 {
   projects.map( (project, i) => {
     const targetScale = 1 - ( (projects.length - i) * 0.05);
     return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
   })
 }
</main>
    </div>


  )
}
