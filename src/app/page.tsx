import Image from "next/image";
import Navbar from './components/navBar/navBar'
import Hero from "./components/hero/hero";
import Cards from "./components/Cars/cards";
import Info from "./components/info/info";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Navbar />
     <Hero />
     <Cards />
     <Info />
    </main>
  );
}
