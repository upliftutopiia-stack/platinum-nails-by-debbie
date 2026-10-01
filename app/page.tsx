"use client";

import { useEffect, useState } from "react";

const INSTAGRAM =
  "https://www.instagram.com/platinum_nails_by_debbie/";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=1642+Union+Boulevard+Allentown+PA+18109";

type Language = "es" | "en";

const copy = {
  es: {
    nav: ["Inicio", "Sobre Debbie", "Servicios", "Ubicación"],
    book: "Reservar por Instagram",
    heroEyebrow: "NAIL ARTIST · ALLENTOWN, PENNSYLVANIA",
    heroTitle1: "El arte de",
    heroTitle2: "sentirte",
    heroTitle3: "hermosa.",
    heroDescription:
      "Detalles que enamoran, diseños con personalidad y uñas que complementan tu estilo. Descubre Platinum Nails By Debbie.",
    explore: "Explorar servicios",
    heroBottom: "BELLEZA EN CADA DETALLE",
    aboutEyebrow: "01 / CONOCE A DEBBIE",
    aboutTitle1: "Tu estilo.",
    aboutTitle2: "Mi pasión.",
    aboutLead:
      "Cada diseño es una oportunidad para expresar tu personalidad.",
    aboutText:
      "Bienvenida a Platinum Nails By Debbie, un espacio dedicado al arte de las uñas en Allentown, Pennsylvania. Explora los diseños compartidos por Debbie y comunícate directamente por sus redes sociales oficiales para consultar sobre citas y servicios.",
    aboutLink: "Ver trabajos en Instagram",
    servicesEyebrow: "02 / INSPIRACIÓN PARA TUS UÑAS",
    servicesTitle1: "Detalles",
    servicesTitle2: "que brillan.",
    servicesDescription:
      "Algunos estilos y técnicas que Debbie ha compartido en sus publicaciones. Consulta directamente para confirmar opciones, precios y disponibilidad.",
    serviceItems: [
      {
        number: "01",
        name: "French Nails",
        description:
          "La elegancia de un clásico con detalles que hacen la diferencia.",
      },
      {
        number: "02",
        name: "Baby Boomer",
        description:
          "Transiciones suaves y un acabado delicado y sofisticado.",
      },
      {
        number: "03",
        name: "Builder Gel",
        description:
          "Explora los trabajos de Debbie realizados con Builder Gel.",
      },
      {
        number: "04",
        name: "Nail Art",
        description:
          "Inspiración, formas y diseños para expresar tu estilo.",
      },
    ],
    statement1: "La belleza está",
    statement2: "en los detalles.",
    portfolioEyebrow: "03 / EL TRABAJO DE DEBBIE",
    portfolioTitle1: "Inspírate.",
    portfolioTitle2: "Enamórate.",
    portfolioText:
      "Descubre los diseños reales y las publicaciones más recientes de Debbie directamente en Instagram.",
    portfolioButton: "Explorar Instagram",
    bookingEyebrow: "04 / TU PRÓXIMA CITA",
    bookingTitle1: "Hagamos",
    bookingTitle2: "algo hermoso.",
    bookingText:
      "Para consultar disponibilidad, servicios o solicitar una cita, comunícate directamente con Debbie a través de su cuenta oficial de Instagram.",
    bookingButton: "Enviar mensaje por Instagram",
    visitEyebrow: "ENCUÉNTRANOS",
    visitTitle: "Allentown, PA",
    directions: "Cómo llegar",
    address: "1642 Union Boulevard, Allentown, PA 18109",
    footer: "NAIL ARTISTRY · ALLENTOWN, PENNSYLVANIA",
    back: "Volver arriba",
  },
  en: {
    nav: ["Home", "About Debbie", "Services", "Location"],
    book: "Book via Instagram",
    heroEyebrow: "NAIL ARTIST · ALLENTOWN, PENNSYLVANIA",
    heroTitle1: "The art of",
    heroTitle2: "feeling",
    heroTitle3: "beautiful.",
    heroDescription:
      "Beautiful details, expressive designs and nails that complement your personal style. Discover Platinum Nails By Debbie.",
    explore: "Explore services",
    heroBottom: "BEAUTY IN EVERY DETAIL",
    aboutEyebrow: "01 / MEET DEBBIE",
    aboutTitle1: "Your style.",
    aboutTitle2: "My passion.",
    aboutLead:
      "Every design is another opportunity to express your personality.",
    aboutText:
      "Welcome to Platinum Nails By Debbie, a nail artistry business in Allentown, Pennsylvania. Explore Debbie's published designs and contact her through her official social media pages for appointment and service enquiries.",
    aboutLink: "View work on Instagram",
    servicesEyebrow: "02 / NAIL INSPIRATION",
    servicesTitle1: "Beautiful",
    servicesTitle2: "details.",
    servicesDescription:
      "Styles and techniques featured in Debbie's posts. Contact her directly to confirm available options, prices and appointments.",
    serviceItems: [
      {
        number: "01",
        name: "French Nails",
        description:
          "A timeless nail style with elegant, personalised details.",
      },
      {
        number: "02",
        name: "Baby Boomer",
        description:
          "Soft transitions and a delicate, sophisticated finish.",
      },
      {
        number: "03",
        name: "Builder Gel",
        description:
          "Explore Debbie's published Builder Gel nail creations.",
      },
      {
        number: "04",
        name: "Nail Art",
        description:
          "Creative inspiration, shapes and designs for your style.",
      },
    ],
    statement1: "Beauty lives",
    statement2: "in the details.",
    portfolioEyebrow: "03 / DEBBIE'S WORK",
    portfolioTitle1: "Discover.",
    portfolioTitle2: "Get inspired.",
    portfolioText:
      "See Debbie's actual nail creations and latest published work directly on Instagram.",
    portfolioButton: "Explore Instagram",
    bookingEyebrow: "04 / YOUR NEXT APPOINTMENT",
    bookingTitle1: "Let's create",
    bookingTitle2: "something beautiful.",
    bookingText:
      "For availability, service enquiries or appointments, contact Debbie directly through her official Instagram account.",
    bookingButton: "Message on Instagram",
    visitEyebrow: "FIND US",
    visitTitle: "Allentown, PA",
    directions: "Get directions",
    address: "1642 Union Boulevard, Allentown, PA 18109",
    footer: "NAIL ARTISTRY · ALLENTOWN, PENNSYLVANIA",
    back: "Back to top",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function switchLanguage() {
    setLanguage((current) => (current === "es" ? "en" : "es"));
    setMenuOpen(false);
  }

  return (
    <main id="top">
      {/* NAVIGATION */}

      <header className={`header ${menuOpen ? "menu-active" : ""}`}>
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-main">PLATINUM</span>
          <span className="brand-sub">NAILS BY DEBBIE</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a
              key={index}
              href={["#top", "#about", "#services", "#visit"][index]}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="language-button"
            onClick={switchLanguage}
            aria-label="Switch language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <a
            className="header-cta"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.book} <Arrow />
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <span className="mobile-caption">
            PLATINUM NAILS BY DEBBIE
          </span>

          <nav aria-label="Mobile navigation">
            {t.nav.map((item, index) => (
              <a
                key={index}
                href={["#top", "#about", "#services", "#visit"][index]}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-language"
            onClick={switchLanguage}
          >
            {language === "es"
              ? "VIEW WEBSITE IN ENGLISH"
              : "VER SITIO EN ESPAÑOL"}
          </button>

          <a
            className="mobile-book"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {t.book} <Arrow />
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>{t.heroEyebrow}</span>
            <span>EST. IN BEAUTY ✦</span>
          </div>

          <div className="hero-center">
            <span className="eyebrow">PLATINUM NAILS BY DEBBIE</span>

            <h1>
              {t.heroTitle1}
              <br />
              <em>{t.heroTitle2}</em>
              <br />
              {t.heroTitle3}
            </h1>

            <p>{t.heroDescription}</p>

            <div className="hero-buttons">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
              >
                {t.book} <Arrow />
              </a>

              <a href="#services" className="text-link">
                {t.explore} ↓
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <span>{t.heroBottom}</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-border">
            <span className="visual-top">THE PLATINUM EDIT</span>

            <div className="visual-arch">
              <div className="visual-sun" />
              <div className="visual-line visual-line-one" />
              <div className="visual-line visual-line-two" />
            </div>

            <div className="visual-word">
              <span>the</span>
              <strong>platinum</strong>
              <em>touch.</em>
            </div>

            <span className="visual-bottom">
              NAIL ARTISTRY · BY DEBBIE
            </span>
          </div>

          <div className="visual-stamp">
            <span>✦</span>
            <small>NAILS BY DEBBIE</small>
          </div>
        </div>
      </section>

      {/* MARQUEE */}

      <div className="marquee" aria-hidden="true">
        <span>
          PLATINUM NAILS ✦ BEAUTY IN EVERY DETAIL ✦
          NAIL ARTISTRY ✦ PLATINUM NAILS ✦ BEAUTY IN EVERY DETAIL ✦
        </span>
      </div>

      {/* ABOUT */}

      <section className="about section-pad" id="about">
        <div className="section-top">
          <span>{t.aboutEyebrow}</span>
          <span>PLATINUM NAILS BY DEBBIE</span>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <span className="eyebrow">THE ARTIST BEHIND THE DETAILS</span>

            <h2>
              {t.aboutTitle1}
              <br />
              <em>{t.aboutTitle2}</em>
            </h2>

            <div className="about-monogram">D<span>✦</span></div>
          </div>

          <div className="about-description">
            <p className="lead">{t.aboutLead}</p>
            <p>{t.aboutText}</p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              {t.aboutLink} <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services section-pad" id="services">
        <div className="section-top">
          <span>{t.servicesEyebrow}</span>
          <span>THE PLATINUM EDIT</span>
        </div>

        <div className="services-intro">
          <div>
            <span className="eyebrow">NAIL ARTISTRY</span>

            <h2>
              {t.servicesTitle1}
              <br />
              <em>{t.servicesTitle2}</em>
            </h2>
          </div>

          <p>{t.servicesDescription}</p>
        </div>

        <div className="service-list">
          {t.serviceItems.map((service) => (
            <a
              href={INSTAGRAM}
              key={service.number}
              target="_blank"
              rel="noopener noreferrer"
              className="service-row"
            >
              <span className="service-number">{service.number}</span>

              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>

              <span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <span className="eyebrow">PLATINUM NAILS BY DEBBIE</span>

        <h2>
          {t.statement1}
          <br />
          <em>{t.statement2}</em>
        </h2>

        <span className="statement-symbol">✦</span>
      </section>

      {/* PORTFOLIO */}

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-top">
          <span>{t.portfolioEyebrow}</span>
          <span>FOLLOW @PLATINUM_NAILS_BY_DEBBIE</span>
        </div>

        <div className="portfolio-intro">
          <span className="eyebrow">THE PLATINUM GALLERY</span>

          <h2>
            {t.portfolioTitle1}
            <br />
            <em>{t.portfolioTitle2}</em>
          </h2>

          <p>{t.portfolioText}</p>
        </div>

        <div className="gallery">
          <div className="gallery-card gallery-one">
            <div className="gallery-arch" />
            <span className="gallery-word">elegance.</span>
            <span className="gallery-label">01 / THE PLATINUM EDIT</span>
          </div>

          <div className="gallery-card gallery-two">
            <div className="gallery-circle" />
            <span className="gallery-word">details.</span>
            <span className="gallery-label">02 / NAIL ARTISTRY</span>
          </div>
        </div>

        <div className="portfolio-bottom">
          <p>@platinum_nails_by_debbie</p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            {t.portfolioButton} <Arrow />
          </a>
        </div>
      </section>

      {/* BOOKING */}

      <section className="booking section-pad" id="booking">
        <div className="section-top">
          <span>{t.bookingEyebrow}</span>
          <span>APPOINTMENTS VIA OFFICIAL SOCIAL MEDIA</span>
        </div>

        <div className="booking-grid">
          <div className="booking-copy">
            <span className="eyebrow">PLATINUM NAILS BY DEBBIE</span>

            <h2>
              {t.bookingTitle1}
              <br />
              <em>{t.bookingTitle2}</em>
            </h2>

            <p>{t.bookingText}</p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              {t.bookingButton} <Arrow />
            </a>
          </div>

          <div className="booking-art">
            <div className="booking-ring ring-one" />
            <div className="booking-ring ring-two" />
            <span>PD</span>
            <small>THE PLATINUM EXPERIENCE ✦</small>
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="visit section-pad" id="visit">
        <div className="section-top">
          <span>{t.visitEyebrow}</span>
          <span>ALLENTOWN · PENNSYLVANIA</span>
        </div>

        <div className="visit-grid">
          <div>
            <span className="eyebrow">PLATINUM NAILS BY DEBBIE</span>
            <h2>{t.visitTitle}</h2>
            <p>{t.address}</p>

            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              {t.directions} <Arrow />
            </a>
          </div>

          <div className="visit-mark">
            <span>PA</span>
            <small>1642 UNION BOULEVARD</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-top">
          <span>{t.footer}</span>
          <span>EST. IN BEAUTY ✦</span>
        </div>

        <div className="footer-logo">
          PLATINUM
          <span>NAILS BY DEBBIE</span>
        </div>

        <div className="footer-bottom">
          <span>PLATINUM NAILS BY DEBBIE</span>

          <div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
            <a href="#booking">{t.book} ↗</a>
            <a href="#top">{t.back} ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}