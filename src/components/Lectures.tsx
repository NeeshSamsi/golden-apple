"use client"

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Lectures() {
  const container = useRef(null)

  console.log(gsap.utils.toArray<HTMLDivElement>(".lecture", container.current))

  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLDivElement>(".lecture", container.current)
        .forEach((lecture) => {
          gsap.fromTo(
            lecture,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: lecture,
                start: "top bottom-=40%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
    },
    { scope: container },
  )

  return (
    <div
      className="col-span-12 grid grid-cols-subgrid gap-y-32"
      ref={container}
    >
      {[
        {
          img: "edith.jpg",
          title: "EDITH HALL | 22 OCT | 11:00 - 12:00",
          description: "Ancient Greek literature and cultural history.",
        },
        {
          img: "mary.jpg",
          title: "MARY BEARD | 24 OCT | 12:00 - 13:00",
          description:
            "Classics and Ancient Rome, and expert in Greek mythology.",
        },
        {
          img: "robin.jpg",
          title: "ROBIN LANE FOX | 25 OCT | 12:35 - 13:35",
          description: "Ancient Greek and Roman historian.",
        },
        {
          img: "emily.jpg",
          title: "EMILY WILSON | 26 OCT | 13:05 - 14:05",
          description: "Classical studies, particularly Greek literature.",
        },
        {
          img: "gregory.jpg",
          title: "GREGORY NAGY | 29 OCT | 13:50 - 14:50",
          description: "Classical Greek literature and mythology.",
        },
      ].map(({ img, title, description }, i) => (
        <div key={i} className="col-span-12 grid grid-cols-subgrid">
          <div
            className={`lecture col-span-5 grid gap-2 ${i % 2 === 0 ? "col-start-7 text-end" : "col-start-1"}`}
          >
            <Image
              src={`/lectures/${img}`}
              alt={title}
              width={540}
              height={540}
              className="w-full rounded-md object-cover"
            />
            <div>
              <p className="font-semibold uppercase">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
