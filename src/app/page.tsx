import Image from "next/image"
import hero1 from "@/../public/hero/hero-1.jpg"
import hero2 from "@/../public/hero/hero-2.jpg"

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-6 bg-white px-24 pt-12 text-white bg-blend-difference">
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
  )
}
