import { Header } from '@/components/nav/Header'
import {Hero} from "@/components/hero/Hero";
import Trending from "@/components/listings/Trending";
import {Testimonials} from "@/components/hero/Testimonials";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <main>
            <Hero/>
            <Trending/>
            <Testimonials/>
        </main>
          <Footer/>
      </>
  )
}
