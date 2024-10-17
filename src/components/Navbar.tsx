import Logo from "./Logo"
import Menu from "@/app/mb/Icons/Menu"


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-24 py-6">
      <div className="flex items-center gap-4">
        <Logo className="w-20 md:w-28" />
        <div className="flex flex-col uppercase">
          <p className="w-48 font-semibold">Museu Del Disseny</p>
          <p className="w-48">Barcelona, Spain</p>
        </div>
      </div>


    <div className="md:hidden">
      <Menu></Menu>
    </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#">Home</a>
        <a href="#">Art</a>
        <a href="#">Lecturers</a>
        <a href="#">Workshops</a>
        <a href="#">History</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}
