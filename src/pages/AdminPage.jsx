import { useState, useEffect } from "react";
import * as CONSTANTS from "../constants";
import { COLORS } from "../constants";

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const CORRECT_PIN = import.meta.env.VITE_ADMIN_PIN;

  const [constants, setConstants] = useState(() => {
    try {
      const saved = localStorage.getItem("fixmen_constants");
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...CONSTANTS, ...parsed };
      }
    } catch (error) {
      console.error("Error loading constants:", error);
      alert(`⚠️ שגיאה בטעינת הנתונים השמורים:\n\n${error.message}\n\nייטענו הגדרות ברירת המחדל`);
    }
    return CONSTANTS;
  });

  const [activeTab, setActiveTab] = useState("hero");
  const [editedData, setEditedData] = useState(constants);
  const [originalImages, setOriginalImages] = useState(new Set());
  const [imageFilenames, setImageFilenames] = useState(new Map());

  // Desktop only check
  useEffect(() => {
    if (window.innerWidth < 1024) {
      alert("מצב ניהול זמין רק במחשב 💻");
      window.location.href = "/";
    }
  }, []);

  // Track original images from constants
  useEffect(() => {
    const images = new Set();
    CONSTANTS.GALLERY.projects.forEach((project) => {
      project.images.forEach((img) => images.add(img));
    });
    CONSTANTS.COMPANIES.items.forEach((company) => {
      if (company.icon) images.add(company.icon);
    });
    setOriginalImages(images);
  }, []);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("קוד שגוי");
      setPin("");
    }
  };

  // Helper function to replace base64 with filename
  const replaceBase64WithFilename = (obj) => {
    if (typeof obj === "string" && obj.startsWith("data:image")) {
      return imageFilenames.get(obj) || obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(replaceBase64WithFilename);
    }
    if (obj && typeof obj === "object") {
      const newObj = {};
      for (const [key, value] of Object.entries(obj)) {
        newObj[key] = replaceBase64WithFilename(value);
      }
      return newObj;
    }
    return obj;
  };

  const handleSave = () => {
    const errors = [];

    try {
      // Validate data before saving
      if (!editedData) {
        errors.push("❌ אין נתונים לשמירה");
      }

      // Validate required fields
      if (editedData) {
        // Check for empty titles/critical fields
        if (!editedData.HERO?.title?.line1?.trim()) {
          errors.push("❌ כותרת ראשית (שורה 1) ריקה");
        }
        if (!editedData.CONTACT?.phone?.trim() && !editedData.CONTACT?.whatsapp?.trim()) {
          errors.push("❌ נדרש לפחות מספר טלפון או WhatsApp אחד");
        }
        if (!editedData.SERVICES?.items?.length) {
          errors.push("⚠️ אין שירותים מוגדרים");
        }
        if (!editedData.GALLERY?.projects?.length) {
          errors.push("⚠️ אין פרויקטים בגלריה");
        }
      }

      // Try to save to localStorage
      if (errors.length === 0) {
        try {
          localStorage.setItem("fixmen_constants", JSON.stringify(editedData));
        } catch (localStorageError) {
          if (localStorageError.name === "QuotaExceededError") {
            errors.push("❌ אין מספיק מקום באחסון המקומי. נסה למחוק תמונות או נתונים ישנים");
          } else {
            errors.push(`❌ שגיאה בשמירה לאחסון מקומי: ${localStorageError.message}`);
          }
        }
      }

      // If there are errors, show them all and stop
      if (errors.length > 0) {
        const errorMessage = "נמצאו בעיות שמונעות שמירה:\n\n" + errors.join("\n\n");
        alert(errorMessage);
        return;
      }

      setConstants(editedData);

      // Replace base64 with filenames for output
      let outputData;
      try {
        outputData = replaceBase64WithFilename(editedData);
      } catch (replaceError) {
        errors.push(`❌ שגיאה בעיבוד תמונות: ${replaceError.message}`);
      }

      // Download constants file (desktop only)
      if (window.innerWidth >= 1024) {
        try {
          const constantsContent = `// Brand Colors
export const COLORS = ${JSON.stringify(outputData.COLORS, null, 2)};

// Contact Info
export const CONTACT = ${JSON.stringify(outputData.CONTACT, null, 2)};

// Navigation
export const NAV = ${JSON.stringify(outputData.NAV, null, 2)};

// Hero Section
export const HERO = ${JSON.stringify(outputData.HERO, null, 2)};

// Services
export const SERVICES = ${JSON.stringify(outputData.SERVICES, null, 2)};

// Gallery
export const GALLERY = ${JSON.stringify(outputData.GALLERY, null, 2)};

// Why Choose Us
export const WHY_CHOOSE = ${JSON.stringify(outputData.WHY_CHOOSE, null, 2)};

// Companies
export const COMPANIES = ${JSON.stringify(outputData.COMPANIES, null, 2)};

// Reviews
export const REVIEWS = ${JSON.stringify(outputData.REVIEWS, null, 2)};

// Contact Form
export const CONTACT_FORM = ${JSON.stringify(outputData.CONTACT_FORM, null, 2)};

// Contact Section
export const CONTACT_SECTION = ${JSON.stringify(
          outputData.CONTACT_SECTION,
          null,
          2
        )};

// Footer
export const FOOTER = ${JSON.stringify(outputData.FOOTER, null, 2)};

// Accessibility
export const ARIA = ${JSON.stringify(outputData.ARIA, null, 2)};
`;

          const blob = new Blob([constantsContent], { type: "text/javascript" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "constants.js";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (downloadError) {
          errors.push(`❌ שגיאה בהורדת הקובץ: ${downloadError.message}`);
        }
      }

      // If there were errors during download/processing, show them
      if (errors.length > 0) {
        const errorMessage = "נמצאו בעיות במהלך השמירה:\n\n" + errors.join("\n\n") + "\n\nפרטים נוספים בקונסול";
        console.error("Save errors:", errors);
        alert(errorMessage);
        return;
      }

      alert("השינויים נשמרו בהצלחה! ✅");
      window.location.href = "/";
    } catch (error) {
      console.error("Error saving constants:", error);
      errors.push(`❌ שגיאה לא צפויה: ${error.message}`);
      const errorMessage = "נמצאו בעיות במהלך השמירה:\n\n" + errors.join("\n\n") + "\n\nפרטים נוספים בקונסול";
      alert(errorMessage);
    }
  };

  const updateField = (path, value) => {
    const newData = { ...editedData };
    const keys = path.split(".");
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    setEditedData(newData);
  };

  const isNewImage = (imgSrc) => {
    return imgSrc && imgSrc.startsWith("data:") && !originalImages.has(imgSrc);
  };

  const handleImageUpload = (file, callback) => {
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert(`❌ שגיאה: הקובץ "${file.name}" אינו תמונה תקינה.\n\nנא להעלות קבצי תמונה בלבד (JPG, PNG, GIF, וכו')`);
        return;
      }

      // Validate file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        alert(`❌ שגיאה: הקובץ "${file.name}" גדול מדי (${(file.size / 1024 / 1024).toFixed(2)}MB).\n\nגודל מקסימלי: 10MB\n\nנא לדחוס את התמונה ולנסות שוב`);
        return;
      }

      const reader = new FileReader();

      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        alert(`❌ שגיאה בקריאת הקובץ "${file.name}":\n\n${error.message || 'שגיאה לא ידועה'}\n\nנסה קובץ אחר`);
      };

      reader.onload = (event) => {
        try {
          const base64Data = event.target.result;
          const filename = `./${file.name}`;

          // Store the mapping
          setImageFilenames((prev) => new Map(prev).set(base64Data, filename));

          callback(base64Data);
        } catch (error) {
          console.error("Error processing image:", error);
          alert(`❌ שגיאה בעיבוד התמונה "${file.name}":\n\n${error.message}\n\nפרטים נוספים בקונסול`);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "hero", label: "עמוד ראשי", icon: "🏠" },
    { id: "services", label: "שירותים", icon: "🔧" },
    { id: "gallery", label: "גלריה", icon: "📸" },
    { id: "whyChoose", label: "למה לבחור בנו", icon: "⭐" },
    { id: "companies", label: "חברות", icon: "🏢" },
    { id: "reviews", label: "ביקורות", icon: "💬" },
    { id: "contact", label: "יצירת קשר", icon: "📞" },
  ];

  // All the render functions from AdminPanel.jsx
  const renderHeroEditor = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">עמוד ראשי</h3>

      <div>
        <label className="block font-bold mb-2">כותרת שורה 1</label>
        <input
          type="text"
          value={editedData.HERO.title.line1}
          onChange={(e) => updateField("HERO.title.line1", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת שורה 2 (בזהב)</label>
        <input
          type="text"
          value={editedData.HERO.title.line2}
          onChange={(e) => updateField("HERO.title.line2", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">פסקה - מבוא</label>
        <textarea
          value={editedData.HERO.paragraphs.intro}
          onChange={(e) => updateField("HERO.paragraphs.intro", e.target.value)}
          className="w-full p-3 border-2 rounded-lg h-24"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">טקסט על FixMen</label>
        <textarea
          value={editedData.HERO.paragraphs.fixmenText}
          onChange={(e) =>
            updateField("HERO.paragraphs.fixmenText", e.target.value)
          }
          className="w-full p-3 border-2 rounded-lg h-24"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">ניסיון</label>
        <textarea
          value={editedData.HERO.paragraphs.experience}
          onChange={(e) =>
            updateField("HERO.paragraphs.experience", e.target.value)
          }
          className="w-full p-3 border-2 rounded-lg h-24"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">הדגשה</label>
        <textarea
          value={editedData.HERO.paragraphs.highlight}
          onChange={(e) =>
            updateField("HERO.paragraphs.highlight", e.target.value)
          }
          className="w-full p-3 border-2 rounded-lg h-24"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">הדגשה מודגשת (בזהב)</label>
        <input
          type="text"
          value={editedData.HERO.paragraphs.highlightBold}
          onChange={(e) =>
            updateField("HERO.paragraphs.highlightBold", e.target.value)
          }
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>
    </div>
  );

  const renderServicesEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">שירותים</h3>
        <button
          onClick={() => {
            const newItems = [
              ...editedData.SERVICES.items,
              { title: "שירות חדש", description: "תיאור השירות" },
            ];
            updateField("SERVICES.items", newItems);
          }}
          className="px-4 py-2 rounded-lg font-bold text-white transition-all"
          style={{ backgroundColor: "#10b981" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          ➕ הוסף שירות
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת</label>
        <input
          type="text"
          value={editedData.SERVICES.title}
          onChange={(e) => updateField("SERVICES.title", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      {editedData.SERVICES.items.map((service, index) => (
        <div
          key={index}
          className="border-2 rounded-lg p-4"
          style={{ borderColor: COLORS.gold }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">שירות {index + 1}</h4>
            <button
              onClick={() => {
                const newItems = editedData.SERVICES.items.filter(
                  (_, i) => i !== index
                );
                updateField("SERVICES.items", newItems);
              }}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              🗑️ מחק
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block font-semibold mb-1">כותרת</label>
              <input
                type="text"
                value={service.title}
                onChange={(e) => {
                  const newItems = [...editedData.SERVICES.items];
                  newItems[index].title = e.target.value;
                  updateField("SERVICES.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">תיאור</label>
              <textarea
                value={service.description}
                onChange={(e) => {
                  const newItems = [...editedData.SERVICES.items];
                  newItems[index].description = e.target.value;
                  updateField("SERVICES.items", newItems);
                }}
                className="w-full p-2 border rounded h-20"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGalleryEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">גלריה</h3>
        <button
          onClick={() => {
            const newProjects = [
              ...editedData.GALLERY.projects,
              { title: "פרויקט חדש", description: "תיאור", images: [] },
            ];
            updateField("GALLERY.projects", newProjects);
          }}
          className="px-4 py-2 rounded-lg font-bold text-white transition-all"
          style={{ backgroundColor: "#10b981" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          ➕ הוסף פרויקט
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת</label>
        <input
          type="text"
          value={editedData.GALLERY.title}
          onChange={(e) => updateField("GALLERY.title", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת משנה</label>
        <input
          type="text"
          value={editedData.GALLERY.subtitle}
          onChange={(e) => updateField("GALLERY.subtitle", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      {editedData.GALLERY.projects.map((project, index) => (
        <div
          key={index}
          className="border-2 rounded-lg p-4"
          style={{ borderColor: COLORS.gold }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">פרויקט {index + 1}</h4>
            <button
              onClick={() => {
                const newProjects = editedData.GALLERY.projects.filter(
                  (_, i) => i !== index
                );
                updateField("GALLERY.projects", newProjects);
              }}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              🗑️ מחק
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block font-semibold mb-1">כותרת</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...editedData.GALLERY.projects];
                  newProjects[index].title = e.target.value;
                  updateField("GALLERY.projects", newProjects);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">תיאור</label>
              <input
                type="text"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...editedData.GALLERY.projects];
                  newProjects[index].description = e.target.value;
                  updateField("GALLERY.projects", newProjects);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">תמונות</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {project.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="relative group aspect-square">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover rounded border-2"
                      style={{ borderColor: COLORS.gold }}
                    />
                    {isNewImage(img) && (
                      <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br font-bold">
                        🆕
                      </div>
                    )}
                    <button
                      onClick={() => {
                        const newProjects = [...editedData.GALLERY.projects];
                        newProjects[index].images = newProjects[
                          index
                        ].images.filter((_, i) => i !== imgIdx);
                        updateField("GALLERY.projects", newProjects);
                      }}
                      className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleImageUpload(file, (base64Data) => {
                    const newProjects = [...editedData.GALLERY.projects];
                    newProjects[index].images = [
                      ...newProjects[index].images,
                      base64Data,
                    ];
                    updateField("GALLERY.projects", newProjects);
                  });
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWhyChooseEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">למה לבחור בנו</h3>
        <button
          onClick={() => {
            const newItems = [
              ...editedData.WHY_CHOOSE.items,
              { emoji: "⭐", title: "סיבה חדשה", description: "תיאור הסיבה" },
            ];
            updateField("WHY_CHOOSE.items", newItems);
          }}
          className="px-4 py-2 rounded-lg font-bold text-white transition-all"
          style={{ backgroundColor: "#10b981" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          ➕ הוסף סיבה
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת</label>
        <input
          type="text"
          value={editedData.WHY_CHOOSE.title}
          onChange={(e) => updateField("WHY_CHOOSE.title", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת משנה</label>
        <input
          type="text"
          value={editedData.WHY_CHOOSE.subtitle}
          onChange={(e) => updateField("WHY_CHOOSE.subtitle", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      {editedData.WHY_CHOOSE.items.map((item, index) => (
        <div
          key={index}
          className="border-2 rounded-lg p-4"
          style={{ borderColor: COLORS.gold }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">סיבה {index + 1}</h4>
            <button
              onClick={() => {
                const newItems = editedData.WHY_CHOOSE.items.filter(
                  (_, i) => i !== index
                );
                updateField("WHY_CHOOSE.items", newItems);
              }}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              🗑️ מחק
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block font-semibold mb-1">אימוג'י</label>
              <input
                type="text"
                value={item.emoji}
                onChange={(e) => {
                  const newItems = [...editedData.WHY_CHOOSE.items];
                  newItems[index].emoji = e.target.value;
                  updateField("WHY_CHOOSE.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">כותרת</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => {
                  const newItems = [...editedData.WHY_CHOOSE.items];
                  newItems[index].title = e.target.value;
                  updateField("WHY_CHOOSE.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">תיאור</label>
              <textarea
                value={item.description}
                onChange={(e) => {
                  const newItems = [...editedData.WHY_CHOOSE.items];
                  newItems[index].description = e.target.value;
                  updateField("WHY_CHOOSE.items", newItems);
                }}
                className="w-full p-2 border rounded h-20"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompaniesEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">חברות</h3>
        <button
          onClick={() => {
            const newItems = [
              ...editedData.COMPANIES.items,
              { name: "חברה חדשה", icon: "" },
            ];
            updateField("COMPANIES.items", newItems);
          }}
          className="px-4 py-2 rounded-lg font-bold text-white transition-all"
          style={{ backgroundColor: "#10b981" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          ➕ הוסף חברה
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת</label>
        <input
          type="text"
          value={editedData.COMPANIES.title}
          onChange={(e) => updateField("COMPANIES.title", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת משנה</label>
        <input
          type="text"
          value={editedData.COMPANIES.subtitle}
          onChange={(e) => updateField("COMPANIES.subtitle", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      {editedData.COMPANIES.items.map((company, index) => (
        <div
          key={index}
          className="border-2 rounded-lg p-4"
          style={{ borderColor: COLORS.gold }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">חברה {index + 1}</h4>
            <button
              onClick={() => {
                const newItems = editedData.COMPANIES.items.filter(
                  (_, i) => i !== index
                );
                updateField("COMPANIES.items", newItems);
              }}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              🗑️ מחק
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block font-semibold mb-1">שם</label>
              <input
                type="text"
                value={company.name}
                onChange={(e) => {
                  const newItems = [...editedData.COMPANIES.items];
                  newItems[index].name = e.target.value;
                  updateField("COMPANIES.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                לוגו - אופציונלי{" "}
                {company.icon && isNewImage(company.icon) && (
                  <span className="text-red-500 font-bold">🆕 שלח למפתח</span>
                )}
              </label>
              {company.icon && (
                <div className="mb-2 relative inline-block">
                  <img
                    src={company.icon}
                    alt=""
                    className="h-16 border-2 rounded"
                    style={{ borderColor: COLORS.gold }}
                  />
                  {isNewImage(company.icon) && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br font-bold">
                      🆕
                    </div>
                  )}
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleImageUpload(file, (base64Data) => {
                    const newItems = [...editedData.COMPANIES.items];
                    newItems[index].icon = base64Data;
                    updateField("COMPANIES.items", newItems);
                  });
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderReviewsEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">ביקורות</h3>
        <button
          onClick={() => {
            const newItems = [
              ...editedData.REVIEWS.items,
              {
                name: "שם הלקוח",
                location: "עיר",
                rating: 5,
                text: "טקסט הביקורת",
                source: "מקור",
                avatar: "ש",
              },
            ];
            updateField("REVIEWS.items", newItems);
          }}
          className="px-4 py-2 rounded-lg font-bold text-white transition-all"
          style={{ backgroundColor: "#10b981" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          ➕ הוסף ביקורת
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת</label>
        <input
          type="text"
          value={editedData.REVIEWS.title}
          onChange={(e) => updateField("REVIEWS.title", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">כותרת משנה</label>
        <input
          type="text"
          value={editedData.REVIEWS.subtitle}
          onChange={(e) => updateField("REVIEWS.subtitle", e.target.value)}
          className="w-full p-3 border-2 rounded-lg"
          style={{ borderColor: COLORS.gold }}
        />
      </div>

      {editedData.REVIEWS.items.map((review, index) => (
        <div
          key={index}
          className="border-2 rounded-lg p-4"
          style={{ borderColor: COLORS.gold }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">ביקורת {index + 1}</h4>
            <button
              onClick={() => {
                const newItems = editedData.REVIEWS.items.filter(
                  (_, i) => i !== index
                );
                updateField("REVIEWS.items", newItems);
              }}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all"
            >
              🗑️ מחק
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block font-semibold mb-1">שם</label>
              <input
                type="text"
                value={review.name}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].name = e.target.value;
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">מיקום</label>
              <input
                type="text"
                value={review.location}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].location = e.target.value;
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">דירוג (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={review.rating}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].rating = parseInt(e.target.value);
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">טקסט</label>
              <textarea
                value={review.text}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].text = e.target.value;
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded h-24"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">מקור</label>
              <input
                type="text"
                value={review.source}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].source = e.target.value;
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">אווטאר (אות)</label>
              <input
                type="text"
                value={review.avatar}
                onChange={(e) => {
                  const newItems = [...editedData.REVIEWS.items];
                  newItems[index].avatar = e.target.value;
                  updateField("REVIEWS.items", newItems);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContactEditor = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">יצירת קשר</h3>

      <div
        className="border-2 rounded-lg p-4"
        style={{ borderColor: COLORS.gold }}
      >
        <h4 className="font-bold mb-3">פרטי קשר</h4>
        <div className="space-y-3">
          <div>
            <label className="block font-semibold mb-1">טלפון 1</label>
            <input
              type="text"
              value={editedData.CONTACT.phone}
              onChange={(e) => updateField("CONTACT.phone", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">טלפון 2</label>
            <input
              type="text"
              value={editedData.CONTACT.phone2}
              onChange={(e) => updateField("CONTACT.phone2", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">WhatsApp 1</label>
            <input
              type="text"
              value={editedData.CONTACT.whatsapp}
              onChange={(e) => updateField("CONTACT.whatsapp", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">WhatsApp 2</label>
            <input
              type="text"
              value={editedData.CONTACT.whatsapp2}
              onChange={(e) => updateField("CONTACT.whatsapp2", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">אימייל</label>
            <input
              type="email"
              value={editedData.CONTACT.email}
              onChange={(e) => updateField("CONTACT.email", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div
        className="border-2 rounded-lg p-4"
        style={{ borderColor: COLORS.gold }}
      >
        <h4 className="font-bold mb-3">סקציית יצירת קשר</h4>
        <div className="space-y-3">
          <div>
            <label className="block font-semibold mb-1">כותרת</label>
            <input
              type="text"
              value={editedData.CONTACT_SECTION.title}
              onChange={(e) =>
                updateField("CONTACT_SECTION.title", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">כותרת משנה</label>
            <input
              type="text"
              value={editedData.CONTACT_SECTION.subtitle}
              onChange={(e) =>
                updateField("CONTACT_SECTION.subtitle", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "hero":
        return renderHeroEditor();
      case "services":
        return renderServicesEditor();
      case "gallery":
        return renderGalleryEditor();
      case "whyChoose":
        return renderWhyChooseEditor();
      case "companies":
        return renderCompaniesEditor();
      case "reviews":
        return renderReviewsEditor();
      case "contact":
        return renderContactEditor();
      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-8"
        style={{ backgroundColor: COLORS.black }}
        dir="rtl"
      >
        <div className="bg-white rounded-2xl p-12 max-w-5xl w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-6" style={{ color: COLORS.gold }}>
              🛠️
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              מצב ניהול - FixMen
            </h1>
            <p className="text-lg text-gray-600">
              פאנל ניהול מלא לעדכון תוכן האתר
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: COLORS.goldDark }}
              >
                <span>✨</span> מה אפשר לעשות?
              </h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-xl">✏️</span>
                  <span>
                    <strong>עריכה:</strong> כל הטקסטים, כותרות ותיאורים
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">➕</span>
                  <span>
                    <strong>הוספה:</strong> שירותים, חברות, ביקורות, פרויקטים
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🗑️</span>
                  <span>
                    <strong>מחיקה:</strong> כל פריט שלא נחוץ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">📸</span>
                  <span>
                    <strong>תמונות:</strong> העלה ישירות מהמחשב - תמונות חדשות
                    מסומנות ב-🆕 וצריכות להישלח למפתח
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">💾</span>
                  <span>
                    <strong>שמירה:</strong> הורדת קובץ constants.js מעודכן
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <span>⚠️</span> חשוב לדעת
              </h3>
              <ul className="text-yellow-700 space-y-2 text-sm">
                <li>• השינויים נשמרים במחשב שלך (localStorage)</li>
                <li>• לאחר שמירה יורד קובץ constants.js - העתק לפרויקט</li>
                <li>• זמין רק במחשב (לא מובייל)</li>
                <li>
                  • תמונות חדשות מסומנות ב-🆕 - שלח אותן למפתח להעלאה לשרת
                </li>
                <li>• לשינויים קבועים - העתק את constants.js</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">
              📝 תהליך העבודה:
            </h3>
            <ol className="space-y-2 text-gray-700 text-sm">
              <li>
                <strong>1.</strong> הכנס קוד PIN למטה
              </li>
              <li>
                <strong>2.</strong> עבור בין הטאבים (יצירת קשר, ביקורות, חברות
                וכו')
              </li>
              <li>
                <strong>3.</strong> ערוך / הוסף / מחק פריטים
              </li>
              <li>
                <strong>4.</strong> העלה תמונות (תמונות חדשות יסומנו ב-🆕)
              </li>
              <li>
                <strong>5.</strong> לחץ "שמור שינויים" - הקובץ יורד אוטומטית
              </li>
              <li>
                <strong>6.</strong> שלח תמונות חדשות (המסומנות ב-🆕) למפתח
              </li>
              <li>
                <strong>7.</strong> המפתח יעלה את התמונות ויעדכן את constants.js
              </li>
            </ol>
          </div>

          <form onSubmit={handlePinSubmit} className="max-w-md mx-auto">
            <div
              className="text-center p-6 rounded-xl mb-4"
              style={{ backgroundColor: COLORS.gold }}
            >
              <p className="text-xl font-bold text-gray-900 mb-4">
                🔐 הכנס קוד PIN להמשך
              </p>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="123456"
                className="w-full p-4 text-center text-2xl font-bold rounded-lg border-2"
                style={{ borderColor: error ? "#ef4444" : COLORS.goldDark }}
                maxLength={6}
              />
              {error && <p className="text-red-600 font-bold mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-white transition-all text-lg"
              style={{ backgroundColor: COLORS.goldDark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.goldDark)
              }
            >
              כניסה למערכת
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: "rtl" }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold" style={{ color: COLORS.black }}>
              🛠️ פאנל ניהול
            </h2>
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-lg font-bold text-white transition-all"
                style={{ backgroundColor: COLORS.goldDark }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.black)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.goldDark)
                }
              >
                💾 שמור שינויים
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 rounded-lg font-bold bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all"
              >
                חזרה לאתר
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-md overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="rounded-lg font-bold transition-all flex flex-col items-center justify-center gap-2 flex-shrink-0"
                style={{
                  width: "140px",
                  height: "100px",
                  backgroundColor:
                    activeTab === tab.id ? COLORS.gold : "#f8fafc",
                  color: activeTab === tab.id ? COLORS.black : "#666",
                  border:
                    activeTab === tab.id
                      ? `3px solid ${COLORS.goldDark}`
                      : "3px solid #e2e8f0",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = "#e2e8f0";
                    e.currentTarget.style.borderColor = COLORS.gold;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = "#f8fafc";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }
                }}
              >
                <span className="text-3xl">{tab.icon}</span>
                <span className="text-sm text-center leading-tight">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
