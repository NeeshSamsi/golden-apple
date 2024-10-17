import Image from "next/image"
import hero1 from "@/../public/hero/hero-1.jpg"
import hero2 from "@/../public/hero/hero-2.jpg"
import paintings from "@/../public/carousel/paintings.jpg"
import Lectures from "@/components/Lectures"
import TruncatedText from "@/components/TruncatedText"

export default function Home() {

  return (
    <>
      <main className=" bg-white px-8 pb-8 pt-12 text-white bg-blend-difference">
        <Image
          src={hero1}
          alt=""
          className=" rounded-md"
        />
        
        <h1 className="  mb-6 -mt-8 text-center font-serif text-5xl text-white mix-blend-difference">
          Discover the Timeless Allure of the <br></br> Golden Apple
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

      <section className="bg-primary py-10 px-8 text-white">
        <div className="flex flex-col gap-4 py-8 font-serif">
          <p className="space-x-2">
            <span className="text-accent text-8xl leading-[0.7]">01</span>
            <span className="text-4xl">/03</span>
          </p>
          <h2 className="text-7xl leading-none">Paintings</h2>
        </div>

        <div className="col-span-5 col-start-7 grid gap-8">
          <TruncatedText text={`Painters like Peter Paul Rubens in “The Judgment of Paris” captured
            the pivotal moment of Paris choosing between Hera, Athena, and
            Aphrodite, showcasing divine splendor and tension. William Etty and
            Henri-Pierre Picou highlighted the sensual allure of the goddesses,
            focusing on beauty and desire. Edward Burne-Jones added a romantic,
            dreamlike quality, emphasizing the apple as a symbol of choice,
            rivalry, and fate. Each artist offers a unique interpretation, from
            vanity and competition to the broader consequences of personal
            decisions, reflecting the myth’s timelessness. Discover these
            masterpieces and more at the Golden Apple Festival.`} maxLength={300}>
            </TruncatedText><Image src={paintings} alt="Painting" className="rounded-md" />
        </div>

        <div className="col-span-12 col-start-1 mt-8 flex items-center justify-center gap-8">
          <div className="bg-accent h-1 w-20 rounded-full" />
          <div className="h-1 w-20 rounded-full bg-white" />
          <div className="h-1 w-20 rounded-full bg-white" />
        </div>

      </section>

      <section className="text-primary  space-y-16 bg-white p-8">
        <h2 className=" text-center font-serif text-6xl leading-none">
          Lectures
        </h2>


        <Lectures />
      </section>
      <section className=" bg-primary p-8 pt-20 text-white">
        <h2 className=" mb-8 text-center font-serif text-6xl leading-none">
          Workshops
        </h2>
        <Image
          src="/workshops/painting.jpg"
          alt="Painting Workshop"
          width={600}
          height={600}
          className=" rounded-md object-cover"
        />
        <div className="">
          <h3 className="mt-10 mb-5 font-serif text-4xl text-accent">
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
              <p className="flex items-center gap-2 font-semibold">
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

      
      </section>
    </>
  )
}
