import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import LocalBusinessSchema from "@/components/seo/local-business-schema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}