"use client";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SpotlightBackground } from "@/components/SpotlightBackground";
import { Testimonials } from "@/components/Testimonials";
import { Tools } from "@/components/Tools";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import "./HomeClient.css";

export function HomeClient() {
  const { phase, isLoading } = useLoadingSequence();

  return (
    <>
      <LoadingScreen phase={phase} />

      <div className={`page ${isLoading ? "page--loading" : "page--ready"}`}>
        <div className="page__hero-shell">
          <SpotlightBackground />
          <Header />
          <Hero />
        </div>
        <main>
          <Process />
          <Portfolio />
          <Services />
          <Tools />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}
