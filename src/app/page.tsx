import Image from "next/image"
import hero1 from "@/../public/hero/hero-1.jpg"
import hero2 from "@/../public/hero/hero-2.jpg"
import paintings from "@/../public/carousel/paintings.jpg"

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-12 gap-6 bg-white px-24 pb-24 pt-12 text-white bg-blend-difference">
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
        <h1 className="col-span-10 col-start-2 row-start-1 mb-48 mt-12 text-center font-serif text-8xl text-white mix-blend-difference">
          Discover the Timeless Allure of the Golden Apple
        </h1>
        <div className="text-primary col-span-5 col-start-1 row-start-1 grid gap-4 self-end">
          <p className="font-medium">
            Explore how the legendary golden apple, a symbol of beauty, desire,
            and conflict in Greek mythology, has inspired masterpieces in
            painting, poetry, and sculpture throughout the ages.
          </p>
          <button className="bg-accent text-primary w-fit rounded-md px-4 py-2 font-semibold">
            Book tickets
          </button>
        </div>
      </main>

      <section className="bg-primary grid grid-cols-12 gap-6 p-24 text-white">
        <div className="col-span-4 col-start-2 flex flex-col gap-4 font-serif">
          <p className="space-x-2">
            <span className="text-accent text-[18rem] leading-[0.7]">01</span>
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
      </section>
    </div>
  )
}
