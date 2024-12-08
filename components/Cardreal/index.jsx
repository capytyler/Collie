'use client';
import { projects } from './data';
import Card from '../../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';




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
