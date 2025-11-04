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

        {/* Video Section */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl bg-black">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={HERO.videoUrl}
              title="FixMen Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

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
            עם ותק של{" "}
            <span className="font-bold">{HERO.paragraphs.experienceBold}</span>,
            בקיאות מקצועית ולא פחות חשוב, מחויבות אמיתית לכל לקוח ולקוחה, נשלים
            את הפרויקט בזמן ובתקציב – ונוודא שהתוצאה תהיה לטווח ארוך מאוד.
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
