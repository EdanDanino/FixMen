import { COMPANIES, COLORS } from "../constants";

export function Companies() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {COMPANIES.title}
          </h2>
          <p className="text-lg text-gray-600">{COMPANIES.subtitle}</p>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {COMPANIES.items.map((company, index) => (
              <div
                key={index}
                className="card-item bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center border-2 border-transparent flex-shrink-0 w-48"
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
