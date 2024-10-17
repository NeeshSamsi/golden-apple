import Image from "next/image"
import hero1 from "@/../public/hero/hero-1.jpg"
import hero2 from "@/../public/hero/hero-2.jpg"
import paintings from "@/../public/carousel/paintings.jpg"
import Lectures from "@/components/Lectures"
import HistorySection from "@/components/HistorySection"

export default function Home() {
  return (
    <>
      <main className="layout-grid bg-white px-24 pb-24 pt-12 text-white bg-blend-difference">
        <Image
          src={hero1}
          alt=""
          className="col-span-3 col-start-1 row-start-1 rounded-md"
        />
        <Image
          src={hero2}
          alt=""
          className="col-span-5 col-start-8 row-start-1 self-end rounded-md"
        />
        <h1 className="heading-1 col-span-10 col-start-2 row-start-1 mb-48 mt-12 text-center font-serif text-8xl text-white mix-blend-difference">
          Discover the Timeless Allure of the Golden Apple
        </h1>
        <div className="col-span-5 col-start-1 row-start-1 grid gap-4 self-end text-primary">
          <p className="font-medium">
            Explore how the legendary golden apple, a symbol of beauty, desire,
            and conflict in Greek mythology, has inspired masterpieces in
            painting, poetry, and sculpture throughout the ages.
          </p>
          <button className="w-fit rounded-md bg-accent px-4 py-2 font-semibold text-primary">
            Book tickets
          </button>
        </div>
      </main>

      <section className="layout-grid bg-primary p-24 text-white">
        <div className="col-span-4 col-start-2 flex flex-col gap-4 font-serif">
          <p className="space-x-2">
            <span className="text-[18rem] leading-[0.7] text-accent">01</span>
            <span className="text-7xl">/03</span>
          </p>
          <h2 className="text-8xl leading-none">Paintings</h2>
        </div>

        <div className="col-span-5 col-start-7 grid gap-8">
          <p className="">
            Painters like Peter Paul Rubens in “The Judgment of Paris” captured
            the pivotal moment of Paris choosing between Hera, Athena, and
            Aphrodite, showcasing divine splendor and tension. William Etty and
            Henri-Pierre Picou highlighted the sensual allure of the goddesses,
            focusing on beauty and desire. Edward Burne-Jones added a romantic,
            dreamlike quality, emphasizing the apple as a symbol of choice,
            rivalry, and fate. Each artist offers a unique interpretation, from
            vanity and competition to the broader consequences of personal
            decisions, reflecting the myth’s timelessness. Discover these
            masterpieces and more at the Golden Apple Festival.
          </p>
          <Image src={paintings} alt="Painting" className="rounded-md" />
        </div>

        <div className="col-span-12 col-start-1 mt-8 flex items-center justify-center gap-8">
          <div className="h-1 w-20 rounded-full bg-accent" />
          <div className="h-1 w-20 rounded-full bg-white" />
          <div className="h-1 w-20 rounded-full bg-white" />
        </div>
      </section>

      <section className="layout-grid space-y-16 bg-white p-24 text-primary">
        <h2 className="col-span-12 text-center font-serif text-8xl leading-none">
          Lectures
        </h2>

        <div className="col-span-12 flex items-center gap-2 font-serif">
          <p className="flex items-start">
            <span className="text-7xl">19</span>
            <sup className="text-3xl">th</sup>
          </p>

          <div className="grid flex-grow items-center">
            <div className="flex justify-evenly">
              {[
                { date: "24", name: "Mary Beard", time: "12:00 - 13:00" },
                { date: "26", name: "Emily Wilson", time: "13:05 - 14:05" },
              ].map(({ date, name, time }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-full w-px bg-primary" />
                  <p className="text-4xl">{date}</p>
                  <div className="font-sans text-xs">
                    <p className="font-semibold">{name}</p>
                    <p>{time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-primary" />

            <div className="flex justify-evenly">
              {[
                { date: "22", name: "Edith Hall", time: "11:00 - 12:00" },
                { date: "25", name: "Robin Lane Fox", time: "12:35 - 13:35" },
                { date: "29", name: "Gregory Nagy", time: "13:50 - 14:50" },
              ].map(({ date, name, time }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-full w-px bg-primary" />
                  <p className="text-4xl">{date}</p>
                  <div className="font-sans text-xs">
                    <p className="font-semibold">{name}</p>
                    <p>{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="flex items-start">
            <span className="text-7xl">30</span>
            <sup className="text-3xl">th</sup>
          </p>
        </div>

        <Lectures />
      </section>

      <section className="layout-grid bg-primary p-24 text-white">
        <h2 className="col-span-12 mb-16 text-center font-serif text-8xl leading-none">
          Workshops
        </h2>

        <div className="col-span-4 col-start-2">
          <h3 className="mb-10 font-serif text-7xl text-accent">
            Painting Workshop
          </h3>
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/workshops/host.jpg"
              alt="Host"
              width={80}
              height={80}
              className="aspect-square size-12 rounded-full object-cover"
            />
            <div>
              <p className="flex items-center gap-4 font-semibold">
                <span>13:00 - 17:00</span>
                <span>25 October 2024</span>
              </p>
              <p>Konstantinos Papamichalopoulos</p>
            </div>
          </div>
          <p>
            Develop a greater appreciation for Greek art by recreating and
            copying Greek artwork using acrylics, watercolor color pastels,
            color pencils and more.
          </p>
        </div>

        <Image
          src="/workshops/painting.jpg"
          alt="Painting Workshop"
          width={600}
          height={600}
          className="col-span-5 col-start-7 aspect-square rounded-md object-cover"
        />
      </section>

     <HistorySection></HistorySection>
    </>
  )
}
