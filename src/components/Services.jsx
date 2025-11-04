import { SERVICES, COLORS } from "../constants";

export function Services() {
  return (
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
  );
}
