import { FOOTER, COLORS } from "../constants";

export function Footer() {
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundColor: COLORS.black }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-bold mb-2" style={{ color: COLORS.gold }}>
          {FOOTER.title}
        </p>
        <p className="text-gray-400">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
