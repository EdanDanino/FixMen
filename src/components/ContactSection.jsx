import { CONTACT_SECTION, CONTACT, COLORS } from "../constants";

export function ContactSection() {
  return (
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
  );
}
