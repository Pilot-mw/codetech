import { Helmet } from 'react-helmet-async'
import PageWrapper from '../components/layout/PageWrapper'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Services from '../components/home/Services'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTA from '../components/ui/CTA'
import { company } from '../data/company'

export default function Home() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Code-Tech — From Development to Production</title>
        <meta
          name="description"
          content="Code-Tech is a Zomba, Malawi-based software and web development company. We build websites, mobile apps, e-commerce, hosting, domains, and professional email."
        />
      </Helmet>

      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <CTA
        title={`Partner with ${company.name}.`}
        description="Let's turn your next idea into a reliable, production-ready product — websites, apps, hosting, domains, and business email, all under one roof."
      />
    </PageWrapper>
  )
}
