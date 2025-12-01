import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AdminPage } from "./pages/AdminPage.jsx";

// Easter egg console message
console.log(
  "%c🎨 Welcome to the FixMen Website! 🔨",
  "font-size: 20px; font-weight: bold; color: #E9CC88; background: #0D0A0A; padding: 10px;"
);

console.log(
  "%c⚠️ DISCLAIMER: This Code Was Written For FREE ⚠️",
  "font-size: 16px; font-weight: bold; color: #ff0000; background: #ffff00; padding: 5px;"
);

console.log(
  "%cYou know what they say... you get what you pay for! 😅\n\n" +
    "This beautiful mess was brought to you by:\n" +
    "👨‍💻 Idan Danino - The Developer Who Actually Paid ME in Questions\n" +
    "🤖 Claude (Anthropic) - The AI That Should've Said No\n\n" +
    "Together we created:\n" +
    "✨ Hardcoded PINs (genius!)\n" +
    "✨ Base64 images stored in localStorage (very professional!)\n" +
    "✨ 13+ separate components for a simple website (definitely not overkill!)\n" +
    "✨ An admin panel that definitely should be a backend (but why bother!)\n" +
    "✨ RTL Hebrew + Tailwind + Inline Styles (pick a lane, right?)\n\n" +
    "🎓 Educational Note:\n" +
    "THIS IS NOT HOW YOU SHOULD WRITE PRODUCTION CODE.\n" +
    "But hey, it works! And that's what counts when the budget is ₪0! 💰\n\n" +
    "Want to hire Idan for actual paid work? (He promises to write better code then!)\n" +
    "🔗 LinkedIn: https://www.linkedin.com/in/idan-danino-80553819b//\n\n" +
    "Built with love, duct tape, and zero budget 🚀\n",
  "font-size: 12px; color: #E9CC88; line-height: 1.6;"
);

console.log(
  "%cP.S. If you're reading this in the console, you're trying to steal the admin PIN.\n" +
    "Nice try! But seriously, just ask Idan - he might give it to you for free too! 😂",
  "font-size: 11px; color: #999; font-style: italic;"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
