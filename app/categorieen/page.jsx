import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/data/products";
import Link from "next/link";

export default function CategorieenPage() {
  const categories = [
    "slimme-verlichting",
    "sensoren",
    "slimme-deurbellen",
    "slimme-thermostaten",
    "slimme-stekkers",
  ];

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Categorieën</h1>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Link href={`/categorieen/${cat}`}>
                  {cat.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
