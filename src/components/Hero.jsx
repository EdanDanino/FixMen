import { HERO, COLORS } from "../constants";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 scroll-reveal">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {HERO.title.line1}
          <br />
          <span style={{ color: COLORS.goldDark }}>{HERO.title.line2}</span>
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            {HERO.paragraphs.intro}
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            <span className="font-bold" style={{ color: COLORS.goldDark }}>
              {HERO.paragraphs.fixmen}
            </span>{" "}
            {HERO.paragraphs.fixmenText}
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {HERO.paragraphs.experience}
          </p>
        </div>

        <div
          className="mt-12 rounded-2xl shadow-xl p-8 md:p-10 text-white"
          style={{ backgroundColor: COLORS.black }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            {HERO.paragraphs.highlight}
            <span className="font-bold" style={{ color: COLORS.gold }}>
              {HERO.paragraphs.highlightBold}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
