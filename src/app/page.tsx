import type { Metadata } from "next";
import { HomeCtaBand } from "@/components/sections/HomeCtaBand";
import { HomeFeaturedProjects } from "@/components/sections/HomeFeaturedProjects";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeServicesTeaser } from "@/components/sections/HomeServicesTeaser";
import { HomeStats } from "@/components/sections/HomeStats";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { HomeWhy } from "@/components/sections/HomeWhy";

export const metadata: Metadata = {
  title: {
    absolute: "KETEMU & Co. — Architecture & Design Build",
  },
  description:
    "Website demonstrasi KETEMU & Co. — Architecture, Construction & Design Build dengan portofolio dan informasi simulasi untuk presentasi.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeServicesTeaser />
      <HomeStats />
      <HomeFeaturedProjects />
      <HomeWhy />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCtaBand />
    </>
  );
}
