import { CONTACT, COLORS, ARIA } from "../constants";

export function Header() {
  return (
    <header className="bg-white shadow-md z-30" role="banner">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img
          src="/fixmen-logo.png"
          alt={ARIA.logoAlt}
          className="h-16 w-auto"
        />

        {/* Double Phone Button */}
        <div
          className="flex gap-3"
          role="navigation"
          aria-label="אפשרויות יצירת קשר"
        >
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-white px-6 py-2 rounded-lg transition font-semibold whitespace-nowrap"
            style={{ backgroundColor: COLORS.goldDark }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.black)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.goldDark)
            }
            aria-label={`התקשר למספר ${CONTACT.phone}`}
          >
            {CONTACT.phone}
          </a>
          <a
            href={`tel:${CONTACT.phone2}`}
            className="text-white px-6 py-2 rounded-lg transition font-semibold whitespace-nowrap"
            style={{ backgroundColor: COLORS.goldDark }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.black)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.goldDark)
            }
            aria-label={`התקשר למספר ${CONTACT.phone2}`}
          >
            {CONTACT.phone2}
          </a>
        </div>
      </div>
    </header>
  );
}
