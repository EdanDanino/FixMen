import { REVIEWS, COLORS } from "../constants";

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {REVIEWS.title}
          </h2>
          <p className="text-lg text-gray-600">{REVIEWS.subtitle}</p>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {REVIEWS.items.map((review, index) => (
              <div
                key={index}
                className="card-item bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent flex-shrink-0 w-96"
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
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
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
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
