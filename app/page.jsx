import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Tips from "@/components/Tips";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <Products />
        <Tips />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
