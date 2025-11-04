import { useState, useEffect } from "react";
import {
  FloatingButtons,
  SideNav,
  Header,
  Hero,
  Services,
  Gallery,
  WhyChooseUs,
  Companies,
  Reviews,
  ContactForm,
  ContactSection,
  Footer,
} from "./components";
import { GALLERY } from "./constants";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSideNav, setShowSideNav] = useState(false);
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

    const cardObserverOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 100);
        }
      });
    }, cardObserverOptions);

    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((section) => observer.observe(section));

    const cards = document.querySelectorAll(".card-item");
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, [currentPage]);

  // Track scroll position for side nav
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80;
      setShowSideNav(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            scroll-behavior: smooth;
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

      <FloatingButtons />
      <SideNav showSideNav={showSideNav} scrollToSection={scrollToSection} />
      <Header />
      <Hero />
      <Services />
      <Gallery
        currentPage={currentPage}
        onPageChange={handlePageChange}
        galleryImageIndex={galleryImageIndex}
        onGalleryNext={handleGalleryNext}
        onGalleryPrev={handleGalleryPrev}
      />
      <WhyChooseUs />
      <Companies />
      <Reviews />
      <ContactForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
