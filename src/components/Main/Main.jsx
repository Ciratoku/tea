import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="top">
        <div className="container">
          <div className="top__inner">
            <h1 className="top__title">
              A cup of tea is a moment of calm in the chaos of life
            </h1>
            <p className="top__text">
              Wide selection of high-quality teas from all over the world,
              carefully curated by tea experts.
            </p>
          </div>
        </div>
      </section>
      <blockquote className="blockquote">
        <p className="blockquote__text">
          "Tea is not just a drink, it's a way of life and a way to connect with
          our loved ones."
        </p>
      </blockquote>
    </main>
  );
}

export default Main;
