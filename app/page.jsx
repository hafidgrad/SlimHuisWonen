import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopAanraders from "@/components/TopAanraders";
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
        <TopAanraders />   {/* ⭐ HIER ZAT DE MISSENDE REGEL */}
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
