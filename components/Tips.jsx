const articles = [
  {
    title: "Beginnen met smart home in 5 stappen",
    text: "We nemen je stap voor stap mee: van eerste lamp tot slimme scènes en automatiseringen.",
  },
  {
    title: "Wat is een smart home hub?",
    text: "We leggen uit wat een hub doet, welke merken er zijn en waar je op moet letten.",
  },
  {
    title: "Merken combineren zonder gedoe",
    text: "Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles netjes samenwerken.",
  },
];

export default function Tips() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <h2>Tips &amp; uitleg</h2>
        <div className="blog-grid">
          {articles.map((a) => (
            <article className="card" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <span className="card-link disabled">Artikel komt binnenkort</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
