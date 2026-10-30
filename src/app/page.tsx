import type { Metadata } from "next";
import { HomeCtaBand } from "@/components/sections/HomeCtaBand";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeServicesTeaser } from "@/components/sections/HomeServicesTeaser";

export const metadata: Metadata = {
  title: {
    absolute: "KETEMU & Co. — Architecture & Design Build",
  },
  description:
    "KETEMU & Co. menyediakan jasa desain arsitektur dan konstruksi dalam satu pendekatan Design & Build.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeServicesTeaser />
      <HomeCtaBand />
    </>
  );
}
