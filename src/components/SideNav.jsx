import { NAV, COLORS } from "../constants";

export function SideNav({ showSideNav, scrollToSection }) {
  return (
    <nav
      className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-40 transition-all duration-500 hidden md:flex flex-col gap-3 ${
        showSideNav
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20 pointer-events-none"
      }`}
    >
      {Object.entries(NAV).map(([key, label]) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={(e) => scrollToSection(e, `#${key}`)}
          className="group relative flex items-center"
        >
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150"
            style={{ backgroundColor: COLORS.goldDark }}
          ></div>
          <span
            className="absolute right-5 bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{ color: COLORS.black }}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}
