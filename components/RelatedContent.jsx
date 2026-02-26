import Link from "next/link";
import Image from "next/image";

export default function RelatedContent({ items, basePath }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="relatedPosts">
      <h2>Verder lezen</h2>

      <div className="relatedGrid">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${basePath}/${item.slug}`}
            className="relatedCard"
          >
            <div className="imageWrap">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}

        {/* placeholders tot 3 */}
        {Array.from({ length: Math.max(0, 3 - items.length) }).map(
          (_, i) => (
            <div key={`empty-${i}`} className="relatedCard placeholder" />
          )
        )}
      </div>
    </section>
  );
}