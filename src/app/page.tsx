import Image from "next/image";
import Navbar from './components/navBar/navBar'
import Info from "./components/Info/info";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Navbar />
     <Info />
    </main>
  );
}
