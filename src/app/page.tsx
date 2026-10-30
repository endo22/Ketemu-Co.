import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";

export const metadata: Metadata = {
  title: {
    absolute: "KETEMU & Co. — Architecture & Design Build",
  },
  description:
    "KETEMU & Co. menyediakan jasa desain arsitektur dan konstruksi dalam satu pendekatan Design & Build.",
};

export default function Home() {
  return <HomeHero />;
}
