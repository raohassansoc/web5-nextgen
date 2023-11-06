import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
import Speciality from "@/components/speciality/Speciality"
import Portfolio from "@/components/portfolio/Portfolio"
import Projects from "@/components/projects/Projects"
import Roadmap from "@/components/roadmap/Roadmap"
import Team from "@/components/team/Team"
import Textimonials from "@/components/testimonials/Testimonials"
import Faq from "@/components/faq/Faq"
import Create from "@/components/create/Create"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Speciality />
      <Portfolio />
      <Projects />
      <Roadmap />
      <Team />
      <Textimonials />
      <Faq />{/* ///Javascript so*/}
      <Create />
    </>
  )
}
