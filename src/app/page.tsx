import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionAnalytics } from "./components/SectionAnalytics";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLaunch } from "./components/SectionLaunch";
import { SectionTrial } from "./components/SectionTrial";

export default function Home() {
  return (
    <>

    <SectionHero />
    <SectionCompanies />
    <SectionFeatures />
    <SectionTestimonials />
    <SectionAnalytics />
    <SectionQuestions />
    <SectionLaunch />
    <SectionTrial />

    </>
  );
}
