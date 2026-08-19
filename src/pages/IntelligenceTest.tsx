import React from "react";
import "./IntelligenceTest.css";

const capabilities = [
  "Catalog reasoning",
  "Creative generation",
  "Storefront automation",
];

const IntelligenceTest: React.FunctionComponent = () => {
  return (
    <main className="intelligence-test">
      <div className="intelligence-test__grid" aria-hidden="true" />

      <header className="intelligence-test__header">
        <a className="intelligence-test__brand" href="/">
          HELIUM
        </a>
        <span className="intelligence-test__status">
          <span className="intelligence-test__status-dot" />
          Intelligence online
        </span>
      </header>

      <section className="intelligence-test__hero">
        <p className="intelligence-test__eyebrow">Experimental interface / 001</p>
        <h1>Helium Intelligence Testing Page</h1>
        <p className="intelligence-test__lede">
          A controlled surface for testing how intelligence can understand,
          create, and operate across modern commerce.
        </p>

        <div className="intelligence-test__actions">
          <a className="intelligence-test__primary" href="#capabilities">
            Explore capabilities
          </a>
          <a className="intelligence-test__secondary" href="/">
            Return to portfolio
          </a>
        </div>
      </section>

      <section
        id="capabilities"
        className="intelligence-test__capabilities"
        aria-label="Intelligence capabilities"
      >
        {capabilities.map((capability, index) => (
          <article className="intelligence-test__capability" key={capability}>
            <span>0{index + 1}</span>
            <h2>{capability}</h2>
            <div className="intelligence-test__signal" aria-hidden="true" />
          </article>
        ))}
      </section>

      <footer className="intelligence-test__footer">
        <span>Helium Intelligence Lab</span>
        <span>Test environment</span>
      </footer>
    </main>
  );
};

export default IntelligenceTest;
