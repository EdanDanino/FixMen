import { useState, useEffect } from "react";

// Brand Colors
const COLORS = {
  gold: "#E9CC88",
  goldDark: "#C9A962",
  black: "#0D0A0A",
  blackLight: "#2D2A2A",
};

// Contact Info
const CONTACT = {
  phone: "054-611-5996",
  phone2: "053-123-4567", // מספר שני - תחליף במספר האמיתי
  whatsapp: "972546115996",
  email: "FixMen.is@gmail.com",
};

// Navigation
const NAV = {
  services: "שירותים",
  gallery: "גלריה",
  about: "אודות",
  reviews: "ביקורות",
  contact: "צור קשר",
};

// Hero Section with Video
const HERO = {
  title: {
    line1: "פתרון מלא לכל פרויקט בנייה,",
    line2: "בכל זמן, ובמהירות!",
  },
  videoUrl:
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0", // החלף עם הסרטון שלך
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
      description: "ביצוע עבודות ריצוף וחיפוי מקצועיות עם חומרים איכותיים",
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
      images: [
        "/gallery/project1-1.jpg",
        "/gallery/project1-2.jpg",
        "/gallery/project1-3.jpg",
      ],
    },
    {
      title: "בניית וילה ברמת השרון",
      description: "בנייה חדשה מהיסוד",
      images: ["/gallery/project2-1.jpg", "/gallery/project2-2.jpg"],
    },
    {
      title: "שדרוג משרדים",
      description: "עיצוב וביצוע משרדי חברת הייטק",
      images: [
        "/gallery/project3-1.jpg",
        "/gallery/project3-2.jpg",
        "/gallery/project3-3.jpg",
      ],
    },
    {
      title: "עבודות גבס וצבע",
      description: "גימור פנים ברמה גבוהה",
      images: ["/gallery/project4-1.jpg"],
    },
    {
      title: "ריצוף וחיפוי",
      description: "חידוש מלא של חדרי אמבטיה ומטבח",
      images: [
        "/gallery/project5-1.jpg",
        "/gallery/project5-2.jpg",
        "/gallery/project5-3.jpg",
      ],
    },
    {
      title: "תיקונים ושיפוצים",
      description: "פרויקט שיפוץ מהיר ויעיל",
      images: ["/gallery/project6-1.jpg", "/gallery/project6-2.jpg"],
    },
    {
      title: "שיפוץ מטבח מודרני",
      description: "עיצוב וביצוע מטבח חדיש",
      images: [
        "/gallery/project7-1.jpg",
        "/gallery/project7-2.jpg",
        "/gallery/project7-3.jpg",
      ],
    },
    {
      title: "חדרי רחצה יוקרתיים",
      description: "שיפוץ מלא עם חומרים איכותיים",
      images: ["/gallery/project8-1.jpg"],
    },
    {
      title: "דירת גן בהרצליה",
      description: "שיפוץ מקיף עם עבודות חוץ",
      images: ["/gallery/project9-1.jpg", "/gallery/project9-2.jpg"],
    },
    {
      title: "משרדים בפתח תקווה",
      description: "עיצוב פנים ושיפוץ מלא",
      images: [
        "/gallery/project10-1.jpg",
        "/gallery/project10-2.jpg",
        "/gallery/project10-3.jpg",
      ],
    },
    {
      title: "בית פרטי בראשון לציון",
      description: "בניה וגימור ברמה גבוהה",
      images: ["/gallery/project11-1.jpg", "/gallery/project11-2.jpg"],
    },
    {
      title: "דירת יוקרה בגבעתיים",
      description: "שיפוץ פנים מלא",
      images: [
        "/gallery/project12-1.jpg",
        "/gallery/project12-2.jpg",
        "/gallery/project12-3.jpg",
      ],
    },
  ],
};

// Why Choose Us - מורחב
const WHY_CHOOSE = {
  title: "למה לבחור ב-FixMen?",
  subtitle: "אנחנו לא רק עושים את העבודה - אנחנו שותפים שלכם להצלחה",
  items: [
    {
      emoji: "⚡",
      title: "מהירות וזמינות מיידית",
      description:
        "תגובה מהירה והגעה לאתר בזמן הקצר ביותר. זמינים לפרויקטים חדשים מיידית, עם יכולת להתחיל עבודה תוך 24-48 שעות.",
    },
    {
      emoji: "✓",
      title: "אמינות ומקצועיות",
      description:
        "ביצוע מקצועי ואחריות מלאה על כל עבודה. צוות מיומן ומנוסה עם הסמכות מקצועיות בכל תחומי הבנייה.",
    },
    {
      emoji: "💎",
      title: "איכות ללא פשרות",
      description:
        "שימוש בחומרים איכותיים מהשורה הראשונה בלבד. עבודה קפדנית עם תשומת לב לכל פרט ופרט.",
    },
    {
      emoji: "📅",
      title: "לוח זמנים מדויק",
      description:
        "מחויבות מלאה ללוחות זמנים. תכנון מראש וביצוע לפי לו״ז מוסכם, ללא עיכובים בלתי צפויים.",
    },
    {
      emoji: "🎯",
      title: "ניסיון של למעלה מעשור",
      description:
        "מעל 10 שנות ניסיון בתחום, מאות פרויקטים מוצלחים, ומומחיות בכל סוגי עבודות הבנייה והשיפוצים.",
    },
    {
      emoji: "💰",
      title: "תקציב שקוף ומדויק",
      description:
        "הצעת מחיר מפורטת וברורה ללא עלויות נסתרות. מחויבות מלאה לתקציב המוסכם.",
    },
  ],
};

// Companies We Work With
const COMPANIES = {
  title: "חברות ועסקים שעובדים איתנו",
  subtitle: "אנחנו גאים לעבוד עם העסקים המובילים במשק",
  items: [
    { name: "חברת הייטק מובילה", icon: "💻" },
    { name: "רשת מלונות בוטיק", icon: "🏨" },
    { name: "משרד עורכי דין בינלאומי", icon: "⚖️" },
    { name: "חברת נדל״ן יוקרתית", icon: "🏗️" },
    { name: "רשת מסעדות פרימיום", icon: "🍽️" },
    { name: "מרכז רפואי פרטי", icon: "🏥" },
  ],
};

// Reviews
const REVIEWS = {
  title: "מה הלקוחות שלנו אומרים",
  subtitle: "ביקורות אמיתיות מלקוחות מרוצים",
  items: [
    {
      name: "דני כהן",
      location: "תל אביב",
      rating: 5,
      text: "שיפצנו את כל הדירה עם FixMen והתוצאה פשוט מדהימה! עבודה מקצועית, מהירה ובתקציב המוסכם. ממליץ בחום!",
      source: "Google",
      avatar: "ד",
    },
    {
      name: "שרה לוי",
      location: "רמת גן",
      rating: 5,
      text: "צוות מקצועי ואדיב במיוחד. הגיעו בזמן, עבדו נקי ומסודר, והתוצאה עלתה על הציפיות. בהחלט אשתמש בשירותים שלהם שוב!",
      source: "Facebook",
      avatar: "ש",
    },
    {
      name: "מיכאל אברהם",
      location: "הרצליה",
      rating: 5,
      text: "בנינו הרחבה לבית עם FixMen. הליווי המקצועי לאורך כל הדרך היה מצוין, והם עמדו בכל לוחות הזמנים שהתחייבו. מומלץ ביותר!",
      source: "Google",
      avatar: "מ",
    },
    {
      name: "רונית ישראלי",
      location: "גבעתיים",
      rating: 5,
      text: "שיפצנו את המטבח וחדרי הרחצה. העבודה בוצעה ברמה הכי גבוהה שיש, עם תשומת לב לכל פרט. תודה רבה!",
      source: "Google",
      avatar: "ר",
    },
    {
      name: "יוסי מזרחי",
      location: "ראשון לציון",
      rating: 5,
      text: "אחרי שעבדתי עם כמה קבלנים שאכזבו, מצאתי את FixMen. סוף סוף אנשים אמינים שעושים מה שהם מבטיחים! ממליץ בחום לכל מי שצריך!",
      source: "Facebook",
      avatar: "י",
    },
    {
      name: "נועה דהן",
      location: "פתח תקווה",
      rating: 5,
      text: "עבודה מדהימה! שיפצנו את כל הדירה תוך חודש וחצי בדיוק כמו שהובטח. איכות עבודה גבוהה ושירות מעולה. תודה ענקית!",
      source: "Google",
      avatar: "נ",
    },
  ],
};

// Contact Form
const CONTACT_FORM = {
  title: "רוצים לשאול? להתייעץ? לקבל הצעת מחיר?",
  subtitle: "השאירו פרטים ונחזור אליכם בהקדם, או התקשרו עכשיו!",
  fields: {
    name: "שם מלא",
    phone: "טלפון",
    email: "אימייל (אופציונלי)",
    message: "ספרו לנו על הפרויקט שלכם",
    submit: "שלח פנייה",
  },
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  // Gallery carousel state - track current image index for each project
  const [galleryImageIndex, setGalleryImageIndex] = useState({});

  // Initialize gallery image indices
  useEffect(() => {
    const initialIndices = {};
    GALLERY.projects.forEach((_, index) => {
      initialIndices[index] = 0;
    });
    setGalleryImageIndex(initialIndices);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Card observer with stagger effect
    const cardObserverOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add stagger delay
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 100);
        }
      });
    }, cardObserverOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((section) => observer.observe(section));

    // Observe all cards
    const cards = document.querySelectorAll(".card-item");
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, [currentPage]); // Re-run when page changes for gallery

  // Track scroll position for side nav
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80;
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

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent("פנייה חדשה מהאתר - " + formData.name);
    const body = encodeURIComponent(
      `שם: ${formData.name}\n` +
        `טלפון: ${formData.phone}\n` +
        `אימייל: ${formData.email}\n\n` +
        `הודעה:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gallery navigation
  const handleGalleryNext = (projectIndex, maxImages) => {
    setGalleryImageIndex((prev) => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % maxImages,
    }));
  };

  const handleGalleryPrev = (projectIndex, maxImages) => {
    setGalleryImageIndex((prev) => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] - 1 + maxImages) % maxImages,
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      dir="rtl"
    >
      <style>
        {`
          html {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }
          
          section {
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes cardPopIn {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          .card-pop-in {
            animation: cardPopIn 0.5s ease-out forwards;
          }
          
          .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .card-item {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          
          .card-item.visible {
            animation: cardPopIn 0.5s ease-out forwards;
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
          href="#reviews"
          onClick={(e) => scrollToSection(e, "#reviews")}
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
            {NAV.reviews}
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
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <img
            src="/fixmen-logo.png"
            alt={ARIA.logoAlt}
            className="h-16 w-auto"
          />

          {/* Double Phone Button */}
          <div className="flex gap-3">
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
            <a
              href={`tel:${CONTACT.phone2}`}
              className="text-white px-6 py-2 rounded-lg transition font-semibold"
              style={{ backgroundColor: COLORS.goldDark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.goldDark)
              }
            >
              {CONTACT.phone2}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="container mx-auto px-4 py-16 md:py-24 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {HERO.title.line1}
            <br />
            <span style={{ color: COLORS.goldDark }}>{HERO.title.line2}</span>
          </h1>

          {/* Video Section */}
          <div className="my-12 rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={HERO.videoUrl}
                title="FixMen Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

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
      <section id="services" className="bg-white py-16 md:py-24 scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {SERVICES.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.items.map((service, index) => (
              <div
                key={index}
                className="card-item bg-slate-50 rounded-xl p-6 hover:shadow-lg transition border-2 border-transparent"
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
        className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 scroll-reveal"
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
            {currentProjects.map((project, projectIdx) => {
              const globalIndex = startIndex + projectIdx;
              const currentImageIndex = galleryImageIndex[globalIndex] || 0;
              const hasMultipleImages = project.images.length > 1;

              return (
                <div
                  key={projectIdx}
                  className="card-item relative overflow-hidden rounded-xl shadow-lg bg-white border-2"
                  style={{ borderColor: COLORS.gold }}
                >
                  {/* Image Container with Navigation */}
                  <div className="relative w-full pt-[75%] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div
                          className="text-6xl mb-4"
                          style={{ color: COLORS.goldDark }}
                        >
                          🏗️
                        </div>
                        <p className="text-sm text-gray-500">
                          תמונה {currentImageIndex + 1} מתוך{" "}
                          {project.images.length}
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons - only show if multiple images */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={() =>
                            handleGalleryPrev(
                              globalIndex,
                              project.images.length
                            )
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
                          style={{ backgroundColor: COLORS.goldDark }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.black)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.goldDark)
                          }
                        >
                          ←
                        </button>
                        <button
                          onClick={() =>
                            handleGalleryNext(
                              globalIndex,
                              project.images.length
                            )
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
                          style={{ backgroundColor: COLORS.goldDark }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.black)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.goldDark)
                          }
                        >
                          →
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.images.map((_, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="w-2 h-2 rounded-full transition-all"
                              style={{
                                backgroundColor:
                                  imgIdx === currentImageIndex
                                    ? COLORS.gold
                                    : "rgba(255,255,255,0.5)",
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title bar */}
                  <div
                    className="p-4"
                    style={{ backgroundColor: COLORS.black }}
                  >
                    <h3
                      className="text-lg font-bold"
                      style={{ color: COLORS.gold }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
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

      {/* Why Choose Us Section - Expanded */}
      <section id="about" className="py-16 md:py-24 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {WHY_CHOOSE.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {WHY_CHOOSE.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {WHY_CHOOSE.items.map((item, index) => (
              <div
                key={index}
                className="card-item bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {COMPANIES.title}
            </h2>
            <p className="text-lg text-gray-600">{COMPANIES.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {COMPANIES.items.map((company, index) => (
              <div
                key={index}
                className="card-item bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center border-2 border-transparent"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <div className="text-4xl mb-3">{company.icon}</div>
                <p className="text-sm font-semibold text-gray-700">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {REVIEWS.title}
            </h2>
            <p className="text-lg text-gray-600">{REVIEWS.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {REVIEWS.items.map((review, index) => (
              <div
                key={index}
                className="card-item bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: COLORS.goldDark }}>
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: COLORS.goldDark }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {review.location} • {review.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {CONTACT_FORM.title}
              </h2>
              <p className="text-lg text-gray-600">{CONTACT_FORM.subtitle}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {CONTACT_FORM.fields.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition"
                      style={{ focusBorderColor: COLORS.goldDark }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = COLORS.goldDark)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#e5e7eb")
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {CONTACT_FORM.fields.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition"
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = COLORS.goldDark)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#e5e7eb")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {CONTACT_FORM.fields.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = COLORS.goldDark)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {CONTACT_FORM.fields.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition resize-none"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = COLORS.goldDark)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-8 py-4 rounded-lg transition font-bold text-lg transform hover:scale-105"
                  style={{ backgroundColor: COLORS.goldDark }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = COLORS.black)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = COLORS.goldDark)
                  }
                >
                  {CONTACT_FORM.fields.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 scroll-reveal"
        style={{ backgroundColor: COLORS.black }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {CONTACT_SECTION.title}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {CONTACT_SECTION.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
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
              href={`tel:${CONTACT.phone2}`}
              className="text-gray-900 px-8 py-4 rounded-lg transition font-bold text-lg"
              style={{ backgroundColor: COLORS.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.goldDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.gold;
              }}
            >
              {CONTACT_SECTION.buttons.phone} {CONTACT.phone2}
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
