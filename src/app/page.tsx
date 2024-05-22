import Image from "next/image";
import Navbar from './components/navBar/navBar'
import Hero from "./components/hero/hero";
import Cards from "./components/Cars/cards";
import Info from "./components/info/info";
import Sponsors from "./components/Sponsors/sponsors";
import News from "./components/News/news";
import Results from "./components/results/results";
import Footer from "./components/Footer/footer";
import Customers from "./components/customers/customers";
import Ready from "./components/Ready/ready";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <Cards />
      <Info />
      <Sponsors />
      <News />
      <Results />
      <Customers />
      <Ready />
      <Footer />
    </main>
  );
}
