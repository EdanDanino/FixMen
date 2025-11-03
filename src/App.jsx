import { useState, useEffect } from "react";

// Brand Colors
const COLORS = {
  gold: "#E9CC88",
  goldDark: "#C9A962", // Darker gold for better contrast on light backgrounds
  black: "#0D0A0A",
  blackLight: "#2D2A2A", // Lighter black for hover states
};

// Contact Info
const CONTACT = {
  phone: "054-611-5996",
  whatsapp: "972546115996",
  email: "FixMen.is@gmail.com",
};

// Navigation
const NAV = {
  services: "שירותים",
  gallery: "גלריה",
  about: "אודות",
  contact: "צור קשר",
};

// Hero Section
const HERO = {
  title: {
    line1: "פתרון מלא לכל פרויקט בנייה,",
    line2: "בכל זמן, ובמהירות!",
  },
  paragraphs: {
    intro:
      "כל פרויקט בנייה או שיפוץ דורש תכנון מדויק וביצוע מקצועי. כל עיכוב עלול לעלות יקר. מצד אחד, אתם רוצים באופן טבעי פתרון מהיר מאוד. מצד שני, ברור שאי אפשר להתפשר על האיכות.",
    fixmen: "בזכות FixMen",
    fixmenText: "אתם יכולים לסמן ✓ גם על הזריזות וגם על היסודיות.",
    experience:
      "עם ותק של למעלה מעשור בתחום, בקיאות מקצועית ולא פחות חשוב, מחויבות אמיתית לכל לקוח ולקוחה, נשלים את הפרויקט בזמן ובתקציב – ונוודא שהתוצאה תהיה לטווח ארוך מאוד.",
    experienceBold: "למעלה מעשור בתחום",
    highlight:
      "גם כשנדרש תיקון דחוף וגם כשמדובר על פרויקט חדש, השלב הראשון הוא בחינה יסודית ומקיפה של המצב הקיים. לאחר מכן תקבלו מאיתנו הסברים ברורים ומפורטים לגבי הדרכים השונות להגיע למצב הרצוי – ",
    highlightBold: "כדי שתוכלו לקבל את ההחלטה הנכונה ביותר עבורכם.",
  },
};

// Services
const SERVICES = {
  title: "השירותים שלנו",
  items: [
    {
      title: "שיפוצים ושדרוגים",
      description: "שיפוץ מלא או חלקי של דירות, בתים ומשרדים ברמה הגבוהה ביותר",
    },
    {
      title: "בניה חדשה",
      description: "ליווי מקצועי מהתכנון ועד למסירה של פרויקטי בנייה חדשים",
    },
    {
      title: "עבודות גבס וצבע",
      description: "גימור פנים ברמה גבוהה עם תשומת לב לכל פרט",
    },
    {
      title: "עבודות חשמל ואינסטלציה",
      description: "התקנת מערכות חשמל ואינסטלציה תקניות ובטוחות",
    },
    {
      title: "ריצוף וחיפוי",
      description: "ביצוע עבודות ריצוף וחיפוי מקצועיות עם חומרים איכוtiים",
    },
    {
      title: "תיקונים דחופים",
      description: "זמינות מיידית לטיפול בתקלות ובעיות דחופות",
    },
  ],
};

// Gallery
const GALLERY = {
  title: "הפרויקטים שלנו",
  subtitle: "סיפורי הצלחה מעבודות שביצענו",
  itemsPerPage: 6,
  projects: [
    {
      title: "שיפוץ דירה בתל אביב",
      description: "שיפוץ מלא של דירת 4 חדרים",
      image: "/gallery/project1.jpg",
    },
    {
      title: "בניית וילה ברמת השרון",
      description: "בנייה חדשה מהיסוד",
      image: "/gallery/project2.jpg",
    },
    {
      title: "שדרוג משרדים",
      description: "עיצוב וביצוע משרדי חברת הייטק",
      image: "/gallery/project3.jpg",
    },
    {
      title: "עבודות גבס וצבע",
      description: "גימור פנים ברמה גבוהה",
      image: "/gallery/project4.jpg",
    },
    {
      title: "ריצוף וחיפוי",
      description: "חידוש מלא של חדרי אמבטיה ומטבח",
      image: "/gallery/project5.jpg",
    },
    {
      title: "תיקונים ושיפוצים",
      description: "פרויקט שיפוץ מהיר ויעיל",
      image: "/gallery/project6.jpg",
    },
    {
      title: "שיפוץ מטבח מודרני",
      description: "עיצוב וביצוע מטבח חדיש",
      image: "/gallery/project7.jpg",
    },
    {
      title: "חדרי רחצה יוקרתיים",
      description: "שיפוץ מלא עם חומרים איכוtiים",
      image: "/gallery/project8.jpg",
    },
    {
      title: "דירת גן בהרצליה",
      description: "שיפוץ מקיף עם עבודות חוץ",
      image: "/gallery/project9.jpg",
    },
    {
      title: "משרדים בפתח תקווה",
      description: "עיצוב פנים ושיפוץ מלא",
      image: "/gallery/project10.jpg",
    },
    {
      title: "בית פרטי בראשון לציון",
      description: "בניה וגימור ברמה גבוהה",
      image: "/gallery/project11.jpg",
    },
    {
      title: "דירת יוקרה בגבעתיים",
      description: "שיפוץ פנים מלא",
      image: "/gallery/project12.jpg",
    },
  ],
};

// Why Choose Us
const WHY_CHOOSE = {
  title: "למה לבחור ב-FixMen?",
  items: [
    {
      emoji: "⚡",
      title: "מהירות",
      description: "תגובה מהירה והגעה לאתר בזמן הקצר ביותר",
    },
    {
      emoji: "✓",
      title: "אמינות",
      description: "ביצוע מקצועי ואחריות מלאה על כל עבודה",
    },
    {
      emoji: "💎",
      title: "איכות",
      description: "שימוש בחומרים ברמה הגבוהה ביותר",
    },
  ],
};

// Contact Section
const CONTACT_SECTION = {
  title: "מוכנים להתחיל?",
  subtitle: "צרו איתנו קשר עכשיו לקבלת ייעוץ ללא התחייבות והצעת מחיר מדויקת",
  buttons: {
    phone: "📞",
    whatsapp: "💬 WhatsApp",
    email: "✉️",
  },
};

// Footer
const FOOTER = {
  title: "FixMen - פתרונות בנייה מקצועיים",
  copyright: "כל הזכויות שמורות © 2025",
};

// Accessibility
const ARIA = {
  callNow: "Call Now",
  whatsapp: "WhatsApp",
  logoAlt: "FixMen Logo",
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSideNav, setShowSideNav] = useState(false);

  // Track scroll position for side nav
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80; // Approximate header height
      setShowSideNav(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate pagination for gallery
  const totalPages = Math.ceil(GALLERY.projects.length / GALLERY.itemsPerPage);
  const startIndex = (currentPage - 1) * GALLERY.itemsPerPage;
  const endIndex = startIndex + GALLERY.itemsPerPage;
  const currentProjects = GALLERY.projects.slice(startIndex, endIndex);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Change page and scroll to gallery top
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const gallerySection = document.querySelector("#gallery");
    if (gallerySection) {
      setTimeout(() => {
        gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      dir="rtl"
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
      </style>

      {/* Floating Call Button */}
      <a
        href={`tel:${CONTACT.phone}`}
        className="fixed bottom-6 left-6 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 animate-pulse"
        style={{ backgroundColor: COLORS.goldDark }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.black)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.goldDark)
        }
        aria-label={ARIA.callNow}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label={ARIA.whatsapp}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Side Navigation */}
      <nav
        className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-40 transition-all duration-500 hidden md:flex flex-col gap-3 ${
          showSideNav
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        <a
          href="#services"
          onClick={(e) => scrollToSection(e, "#services")}
          className="group relative flex items-center"
        >
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150"
            style={{ backgroundColor: COLORS.goldDark }}
          ></div>
          <span
            className="absolute right-5 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{ color: COLORS.black }}
          >
            {NAV.services}
          </span>
        </a>

        <a
          href="#gallery"
          onClick={(e) => scrollToSection(e, "#gallery")}
          className="group relative flex items-center"
        >
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150"
            style={{ backgroundColor: COLORS.goldDark }}
          ></div>
          <span
            className="absolute right-5 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{ color: COLORS.black }}
          >
            {NAV.gallery}
          </span>
        </a>

        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "#about")}
          className="group relative flex items-center"
        >
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150"
            style={{ backgroundColor: COLORS.goldDark }}
          ></div>
          <span
            className="absolute right-5 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{ color: COLORS.black }}
          >
            {NAV.about}
          </span>
        </a>

        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="group relative flex items-center"
        >
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150"
            style={{ backgroundColor: COLORS.goldDark }}
          ></div>
          <span
            className="absolute right-5 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{ color: COLORS.black }}
          >
            {NAV.contact}
          </span>
        </a>
      </nav>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <img
            src="/fixmen-logo.png"
            alt={ARIA.logoAlt}
            className="h-16 w-auto"
          />
          <nav className="hidden md:flex gap-8">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="text-gray-700 hover:text-gray-900 transition font-medium"
              style={{ "--hover-color": COLORS.goldDark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.goldDark)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {NAV.services}
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, "#gallery")}
              className="text-gray-700 hover:text-gray-900 transition font-medium"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.goldDark)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {NAV.gallery}
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="text-gray-700 hover:text-gray-900 transition font-medium"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.goldDark)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {NAV.about}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-gray-700 hover:text-gray-900 transition font-medium"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.goldDark)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {NAV.contact}
            </a>
          </nav>
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-white px-6 py-2 rounded-lg transition font-semibold"
            style={{ backgroundColor: COLORS.goldDark }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.black)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.goldDark)
            }
          >
            {CONTACT.phone}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {HERO.title.line1}
            <br />
            <span style={{ color: COLORS.goldDark }}>{HERO.title.line2}</span>
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {HERO.paragraphs.intro}
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold" style={{ color: COLORS.goldDark }}>
                {HERO.paragraphs.fixmen}
              </span>{" "}
              {HERO.paragraphs.fixmenText}
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              עם ותק של{" "}
              <span className="font-bold">
                {HERO.paragraphs.experienceBold}
              </span>
              , בקיאות מקצועית ולא פחות חשוב, מחויבות אמיתית לכל לקוח ולקוחה,
              נשלים את הפרויקט בזמן ובתקציב – ונוודא שהתוצאה תהיה לטווח ארוך
              מאוד.
            </p>
          </div>

          <div
            className="mt-12 rounded-2xl shadow-xl p-8 md:p-10 text-white"
            style={{ backgroundColor: COLORS.black }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              {HERO.paragraphs.highlight}
              <span className="font-bold" style={{ color: COLORS.gold }}>
                {HERO.paragraphs.highlightBold}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {SERVICES.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.items.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition border-2 border-transparent"
                style={{ "--hover-border": COLORS.gold }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {GALLERY.title}
            </h2>
            <p className="text-lg text-gray-600">{GALLERY.subtitle}</p>
          </div>

          <div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-500 ease-in-out animate-fadeIn"
          >
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-transparent"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                {/* Image placeholder with aspect ratio */}
                <div className="relative w-full pt-[75%] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div
                        className="text-6xl mb-4"
                        style={{ color: COLORS.goldDark }}
                      >
                        🏗️
                      </div>
                      <p className="text-sm text-gray-500">תמונה בקרוב</p>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(13, 10, 10, 0.7)" }}
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-6">
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: COLORS.gold }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-white text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Title bar */}
                <div className="p-4" style={{ backgroundColor: COLORS.black }}>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: COLORS.gold }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              {/* Next Button (on the right in RTL) */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor:
                    currentPage === totalPages ? "#e5e7eb" : COLORS.goldDark,
                  color: currentPage === totalPages ? "#9ca3af" : "white",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages)
                    e.currentTarget.style.backgroundColor = COLORS.black;
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages)
                    e.currentTarget.style.backgroundColor = COLORS.goldDark;
                }}
              >
                הבא →
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className="w-10 h-10 rounded-lg font-bold transition-all duration-300 transform hover:scale-110 active:scale-95"
                      style={{
                        backgroundColor:
                          currentPage === page ? COLORS.goldDark : "white",
                        color: currentPage === page ? "white" : COLORS.black,
                        border: `2px solid ${
                          currentPage === page ? COLORS.goldDark : "#e5e7eb"
                        }`,
                      }}
                      onMouseEnter={(e) => {
                        if (currentPage !== page) {
                          e.currentTarget.style.backgroundColor = COLORS.gold;
                          e.currentTarget.style.borderColor = COLORS.gold;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== page) {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.borderColor = "#e5e7eb";
                        }
                      }}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Previous Button (on the left in RTL) */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor:
                    currentPage === 1 ? "#e5e7eb" : COLORS.goldDark,
                  color: currentPage === 1 ? "#9ca3af" : "white",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1)
                    e.currentTarget.style.backgroundColor = COLORS.black;
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1)
                    e.currentTarget.style.backgroundColor = COLORS.goldDark;
                }}
              >
                ← הקודם
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="about"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {WHY_CHOOSE.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE.items.map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  <span className="text-4xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.black }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {CONTACT_SECTION.title}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {CONTACT_SECTION.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-gray-900 px-8 py-4 rounded-lg transition font-bold text-lg"
              style={{ backgroundColor: COLORS.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.goldDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.gold;
              }}
            >
              {CONTACT_SECTION.buttons.phone} {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg"
            >
              {CONTACT_SECTION.buttons.whatsapp}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-gray-900 px-8 py-4 rounded-lg transition font-bold text-lg"
              style={{ backgroundColor: COLORS.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.goldDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.gold;
              }}
            >
              {CONTACT_SECTION.buttons.email} {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-8"
        style={{ backgroundColor: COLORS.black }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2" style={{ color: COLORS.gold }}>
            {FOOTER.title}
          </p>
          <p className="text-gray-400">{FOOTER.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
