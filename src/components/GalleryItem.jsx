import { COLORS } from "../constants";

export function GalleryItem({ project, currentImageIndex, onNext, onPrev }) {
  const hasMultipleImages = project.images.length > 1;

  return (
    <div
      className="card-item relative overflow-hidden rounded-xl shadow-lg bg-white border-2"
      style={{ borderColor: COLORS.gold }}
    >
      {/* Image Container with Navigation */}
      <div className="relative w-full pt-[75%] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-6xl mb-4" style={{ color: COLORS.goldDark }}>
              🏗️
            </div>
            <p className="text-sm text-gray-500">
              תמונה {currentImageIndex + 1} מתוך {project.images.length}
            </p>
          </div>
        </div>

        {/* Navigation Buttons - only show if multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
              style={{ backgroundColor: COLORS.goldDark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.goldDark)
              }
            >
              ←
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
              style={{ backgroundColor: COLORS.goldDark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.goldDark)
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
      <div className="p-4" style={{ backgroundColor: COLORS.black }}>
        <h3 className="text-lg font-bold" style={{ color: COLORS.gold }}>
          {project.title}
        </h3>
        <p className="text-sm text-gray-400">{project.description}</p>
      </div>
    </div>
  );
}
