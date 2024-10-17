"use client"
import Image from "next/image"
import paris from "@/../public/history/paris.jpg"
import judgement from "@/../public/history/judgment.png"
import herakles from "@/../public/history/herakles.jpg"
import discord from "@/../public/history/discord.png"
import citron from "@/../public/history/citron.png"
import frontispiece from "@/../public/history/frontispiece.png"
import hippomenes from "@/../public/history/hippomenes.png"
import hercules from "@/../public/history/hercules.png"

import { useEffect, useRef, useState } from "react"

export default function Lectures() {
  const [isSticky, setIsSticky] = useState(false)
  const [firstNumbers, setFirstNumbers] = useState(14)
  const [fade, setFade] = useState(false)
  const dic = {
    "50": 14,
    "85": 14,
    "63": 15,
    "30": 16,
    "57": 16,
    "46": 16,
    "80": 16,
    "14": 20,
  }
  // Referencias para cada sección
  const sectionsRefs = useRef([])

  // Función que se llamará cuando cada sección se vuelva visible
  const handleIntersection = (entries) => {
    console.log()

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("data-section")
        setFirstNumbers(dic[sectionId]) // Actualiza el número sticky con el id de la sección visible
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    })

    sectionsRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <section>
      <h2 className="my-32 text-center font-serif text-8xl leading-none">
        History of the <br /> Golden Apple
      </h2>

      <div className="flex h-fit justify-end">
        <h2
          className={`sticky-heading font-serif text-[14rem] ${
            isSticky ? "sticky-heading" : "text-gray-900"
          }`}
        >
          {firstNumbers}
        </h2>

        <div className="h-fit w-2/3">
          {/* Sección 1 */}
          <div
            className="border-b-2 border-black"
            data-section="50"
            ref={(el) => (sectionsRefs.current[0] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">50</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                The Judgement of Paris
                <br /> in the Burrel Collection
              </p>
            </span>
            <Image
              src={paris}
              alt="Paris picture"
              className="ml-[15.5rem] -translate-y-14"
            />
          </div>

          {/* Sección 2 */}
          <div
            className="border-b-2 border-black"
            data-section="85"
            ref={(el) => (sectionsRefs.current[1] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">85</h2>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col justify-end">
                  <p className="mb-20 ml-10 text-lg font-semibold">
                    The Judgement of
                    <br />
                    Paris by Botticelli
                  </p>
                </div>
                <Image
                  src={judgement}
                  alt="Judgement of Paris"
                  className="mb-8 -translate-y-4"
                />
              </div>
            </span>
          </div>

          {/* Sección 3 */}
          <div
            className="border-b-2 border-black"
            data-section="63"
            ref={(el) => (sectionsRefs.current[2] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">63</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                Herakles killing Ladon,
                <br /> and in the background
                <br /> picking the golden apples
              </p>
            </span>
            <Image
              src={herakles}
              alt="Herakles picture"
              className="ml-[14.5rem] -translate-y-14"
            />
          </div>

          {/* Sección 4 */}
          <div
            className="border-b-2 border-black"
            data-section="30"
            ref={(el) => (sectionsRefs.current[3] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">30</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                Golden Apple of Discord
                <br /> by Jacob Jordaens
              </p>
            </span>
            <Image
              src={discord}
              alt="Golden Apple of Discord"
              className="ml-[14.5rem] -translate-y-14"
            />
          </div>

          {/* Sección 5 */}
          <div
            className="border-b-2 border-black"
            data-section="57"
            ref={(el) => (sectionsRefs.current[4] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">57</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                Frontispiece to the 1657
                <br />
                edition of the Deipnosophists
              </p>
            </span>
            <Image
              src={frontispiece}
              alt="Frontispiece picture"
              className="ml-[14.5rem] -translate-y-14"
            />
          </div>

          {/* Sección 6 */}
          <div
            className="border-b-2 border-black"
            data-section="46"
            ref={(el) => (sectionsRefs.current[5] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">46</h2>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col justify-end">
                  <p className="mb-20 ml-10 text-lg font-semibold">
                    Citron and sour Orange
                    <br />
                    by Vincenzo Leonardi
                  </p>
                </div>
                <Image
                  src={citron}
                  alt="Citron and sour Orange"
                  className="mb-8"
                />
              </div>
            </span>
          </div>

          {/* Sección 7 */}
          <div
            className="border-b-2 border-black"
            data-section="80"
            ref={(el) => (sectionsRefs.current[6] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">80</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                Hippomenes and
                <br /> Atalanta by Nicolas Colombel
              </p>
            </span>
            <Image
              src={hippomenes}
              alt="Hippomenes and Atalanta"
              className="ml-[14.5rem] -translate-y-14"
            />
          </div>

          {/* Sección 8 */}
          <div
            className="border-b-2 border-black"
            data-section="14"
            ref={(el) => (sectionsRefs.current[7] = el)}
          >
            <span className="flex items-end">
              <h2 className="font-serif text-[14rem]">14</h2>
              <p className="mb-20 ml-10 text-lg font-semibold">
                Hercules 11th Labour
                <br /> collecting the apples of
                <br /> the Hesperides
              </p>
            </span>
            <Image
              src={hercules}
              alt="Hercules picture"
              className="ml-[14.5rem] -translate-y-14"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
