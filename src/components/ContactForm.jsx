import { useState } from "react";
import { CONTACT_FORM, CONTACT, COLORS } from "../constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("פנייה חדשה מהאתר - " + formData.name);
    const body = encodeURIComponent(
      `שם: ${formData.name}\n` +
        `טלפון: ${formData.phone}\n` +
        `אימייל: ${formData.email}\n\n` +
        `הודעה:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {CONTACT_FORM.title}
            </h2>
            <p className="text-lg text-gray-600">{CONTACT_FORM.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form
              onSubmit={handleFormSubmit}
              className="space-y-6"
              aria-label="טופס יצירת קשר"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    {CONTACT_FORM.fields.name}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none transition"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = COLORS.goldDark)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    {CONTACT_FORM.fields.phone}
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none transition"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = COLORS.goldDark)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  {CONTACT_FORM.fields.email}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none transition"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = COLORS.goldDark)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e5e7eb")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  {CONTACT_FORM.fields.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none transition resize-none"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = COLORS.goldDark)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e5e7eb")
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-lg transition font-bold text-lg transform hover:scale-105 whitespace-nowrap"
                style={{ backgroundColor: COLORS.goldDark }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.black)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.goldDark)
                }
                aria-label="שלח טופס יצירת קשר"
              >
                {CONTACT_FORM.fields.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
