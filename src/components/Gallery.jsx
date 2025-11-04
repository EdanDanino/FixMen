import { GALLERY } from "../constants";
import { GalleryItem } from "./GalleryItem";
import { useEffect, useRef } from "react";

export function Gallery({ galleryImageIndex, onGalleryNext, onGalleryPrev }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
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

        {/* Horizontal scroll container with shadow indicators */}
        <div className="relative scroll-container">
          <div className="scroll-shadow-right"></div>
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide scroll-content"
            role="region"
            aria-label="גלריית פרויקטים"
            tabIndex="0"
          >
            <div
              className="flex gap-6 pb-4"
              style={{ minWidth: "min-content" }}
            >
              {GALLERY.projects.map((project, projectIdx) => {
                const currentImageIndex = galleryImageIndex[projectIdx] || 0;

                return (
                  <div key={projectIdx} className="flex-shrink-0 w-80">
                    <GalleryItem
                      project={project}
                      currentImageIndex={currentImageIndex}
                      onNext={() =>
                        onGalleryNext(projectIdx, project.images.length)
                      }
                      onPrev={() =>
                        onGalleryPrev(projectIdx, project.images.length)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scroll-container {
          position: relative;
        }

        .scroll-shadow-right {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80px;
          background: linear-gradient(
            to left,
            rgba(248, 250, 252, 0.95) 0%,
            rgba(248, 250, 252, 0.7) 30%,
            rgba(248, 250, 252, 0) 100%
          );
          pointer-events: none;
          z-index: 10;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .scroll-content {
          cursor: grab;
          scroll-behavior: smooth;
        }

        .scroll-content:active {
          cursor: grabbing;
        }

        @keyframes scrollHint {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .scroll-content {
          animation: scrollHint 2s ease-in-out 1;
        }
      `}</style>
    </section>
  );
}
