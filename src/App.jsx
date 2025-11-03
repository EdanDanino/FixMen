import { useState } from 'react'

function App() {
  const phoneNumber = "050-123-4567";
  const whatsappNumber = "972501234567"; // Format: country code + number without leading 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Floating Call Button */}
      <a 
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 bg-orange-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-700 transition-all hover:scale-110 z-50 animate-pulse"
        aria-label="Call Now"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <img src="/fixmen-logo.png" alt="FixMen Logo" className="h-16 w-auto" />
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition">שירותים</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition">אודות</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">צור קשר</a>
          </nav>
          <a href={`tel:${phoneNumber}`} className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold">
            {phoneNumber}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            פתרון מלא לכל פרויקט בנייה,<br />
            <span className="text-orange-600">בכל זמן, ובמהירות!</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              כל פרויקט בנייה או שיפוץ דורש תכנון מדויק וביצוע מקצועי. כל עיכוב עלול לעלות יקר.
              מצד אחד, אתם רוצים באופן טבעי פתרון מהיר מאוד. מצד שני, ברור שאי אפשר להתפשר על האיכות.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-orange-600">בזכות FixMen</span> אתם יכולים לסמן ✓ גם על הזריזות וגם על היסודיות.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              עם ותק של <span className="font-bold">למעלה מעשור בתחום</span>, בקיאות מקצועית ולא פחות חשוב,
              מחויבות אמיתית לכל לקוח ולקוחה, נשלים את הפרויקט בזמן ובתקציב – ונוודא שהתוצאה
              תהיה לטווח ארוך מאוד.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 md:p-10 text-white">
            <p className="text-lg md:text-xl leading-relaxed">
              גם כשנדרש תיקון דחוף וגם כשמדובר על פרויקט חדש, השלב הראשון הוא בחינה יסודית
              ומקיפה של המצב הקיים. לאחר מכן תקבלו מאיתנו הסברים ברורים ומפורטים לגבי הדרכים
              השונות להגיע למצב הרצוי – <span className="font-bold">כדי שתוכלו לקבל את ההחלטה הנכונה
              ביותר עבורכם.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">השירותים שלנו</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "שיפוצים ושדרוגים",
                description: "שיפוץ מלא או חלקי של דירות, בתים ומשרדים ברמה הגבוהה ביותר"
              },
              {
                title: "בניה חדשה",
                description: "ליווי מקצועי מהתכנון ועד למסירה של פרויקטי בנייה חדשים"
              },
              {
                title: "עבודות גבס וצבע",
                description: "גימור פנים ברמה גבוהה עם תשומת לב לכל פרט"
              },
              {
                title: "עבודות חשמל ואינסטלציה",
                description: "התקנת מערכות חשמל ואינסטלציה תקניות ובטוחות"
              },
              {
                title: "ריצוף וחיפוי",
                description: "ביצוע עבודות ריצוף וחיפוי מקצועיות עם חומרים איכוtiים"
              },
              {
                title: "תיקונים דחופים",
                description: "זמינות מיידית לטיפול בתקלות ובעיות דחופות"
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition border-2 border-transparent hover:border-orange-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">למה לבחור ב-FixMen?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">מהירות</h3>
              <p className="text-gray-700">תגובה מהירה והגעה לאתר בזמן הקצר ביותר</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">אמינות</h3>
              <p className="text-gray-700">ביצוע מקצועי ואחריות מלאה על כל עבודה</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">איכות</h3>
              <p className="text-gray-700">שימוש בחומרים ברמה הגבוהה ביותר</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            צרו איתנו קשר עכשיו לקבלת ייעוץ ללא התחייבות והצעת מחיר מדויקת
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={`tel:${phoneNumber}`} className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg">
              📞 {phoneNumber}
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg">
              💬 WhatsApp
            </a>
            <a href="mailto:info@fixmen.co.il" className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition font-bold text-lg">
              ✉️ info@fixmen.co.il
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">FixMen - פתרונות בנייה מקצועיים</p>
          <p className="text-gray-400">כל הזכויות שמורות © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default App

