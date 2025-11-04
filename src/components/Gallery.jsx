import { GALLERY, COLORS } from "../constants";
import { GalleryItem } from "./GalleryItem";

export function Gallery({
  currentPage,
  onPageChange,
  galleryImageIndex,
  onGalleryNext,
  onGalleryPrev,
}) {
  const totalPages = Math.ceil(GALLERY.projects.length / GALLERY.itemsPerPage);
  const startIndex = (currentPage - 1) * GALLERY.itemsPerPage;
  const endIndex = startIndex + GALLERY.itemsPerPage;
  const currentProjects = GALLERY.projects.slice(startIndex, endIndex);

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

        <div
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-500 ease-in-out animate-fadeIn"
        >
          {currentProjects.map((project, projectIdx) => {
            const globalIndex = startIndex + projectIdx;
            const currentImageIndex = galleryImageIndex[globalIndex] || 0;

            return (
              <GalleryItem
                key={projectIdx}
                project={project}
                currentImageIndex={currentImageIndex}
                onNext={() => onGalleryNext(globalIndex, project.images.length)}
                onPrev={() => onGalleryPrev(globalIndex, project.images.length)}
              />
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
            <button
              onClick={() =>
                onPageChange(Math.min(currentPage + 1, totalPages))
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
                    onClick={() => onPageChange(page)}
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
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
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
  );
}
