import { WHY_CHOOSE, COLORS } from "../constants";

export function WhyChooseUs() {
  return (
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

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {WHY_CHOOSE.items.map((item, index) => (
              <div
                key={index}
                className="card-item bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent flex-shrink-0 w-80"
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
