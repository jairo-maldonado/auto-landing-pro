import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
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