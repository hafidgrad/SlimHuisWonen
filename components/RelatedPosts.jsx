import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export default function RelatedPosts({ related }) {
  if (!related || related.length === 0) return null;

  const posts = blogPosts.filter((post) =>
    related.includes(post.slug)
  );

  return (
    <section className="relatedPosts">
      <h2>Verder lezen</h2>

      <div className="relatedGrid">
        {/* ✅ echte posts */}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="relatedCard"
          >
            <div className="imageWrap">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}

        {/* ✅ lege placeholders zodat grid altijd 3 breed blijft */}
        {Array.from({ length: Math.max(0, 3 - posts.length) }).map(
          (_, i) => (
            <div
              key={`empty-${i}`}
              className="relatedCard placeholder"
            />
          )
        )}
      </div>
    </section>
  );
}