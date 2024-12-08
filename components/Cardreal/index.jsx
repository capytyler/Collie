'use client';

import Card from '../../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import lab from '../../public/lab.gif'
import personal from '../../public/personal.gif'
import med from '../../public/med.gif'


const projects = [
    {
      title: "Organisation (Laboratory)",
      description: "The Cheng Lab website is a neuroscience laboratory website.",
      src: lab,
      link: "https://chenglab.vercel.app/",
      color: "#BBACAF"
    },
    {
      title: "Organisation (Medical Center)",
      description: "This is a website for medical center in Vietnam.",
      src: med,
      link: "https://https://www.homed.health/",
      color: "#977F6D"
    },
    {
      title: "Personal Website",
      description: "A personal website of Julia Chan",
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

    <div>

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
