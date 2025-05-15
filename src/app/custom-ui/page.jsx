"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePalette } from "../context/PaletteContext.jsx";
import { Button, Card, CardContent } from "@mui/material";

// Options
const colorOptions = [ 
  { label: "Royal Blue", value: "#2563EB", dark: "#1E40AF" },
  { label: "Emerald Green", value: "#10B981", dark: "#047857" },
  { label: "Warm Yellow", value: "#FACC15", dark: "#CA8A04" },
  { label: "Crimson Red", value: "#DC2626", dark: "#991B1B" },
  { label: "Deep Purple", value: "#7C3AED", dark: "#5B21B6" },
  { label: "Sunset Orange", value: "#FB923C", dark: "#EA580C" },
  { label: "Charcoal Gray", value: "#374151", dark: "#1F2937" },
  { label: "Turquoise Blue", value: "#06B6D4", dark: "#0E7490" },
  { label: "Rose Pink", value: "#F43F5E", dark: "#BE123C" },
];

const buttonRadiusOptions = [
  { label: "Small", value: "4px" },
  { label: "Medium", value: "8px" },
  { label: "Large", value: "16px" },
  { label: "Full", value: "9999px" },
];

const cardRadiusOptions = [
  { label: "Small", value: "8px" },
  { label: "Medium", value: "12px" },
  { label: "Large", value: "20px" },
  { label: "Full", value: "9999px" },
];

const sizeOptions = [
  { label: "Small", value: "12px" },
  { label: "Medium", value: "16px" },
  { label: "Large", value: "20px" },
];

const shadowOptions = [
  { label: "None", value: "none" },
  { label: "Small", value: "0 1px 2px rgba(0,0,0,0.1)" },
  { label: "Medium", value: "0 4px 6px rgba(0,0,0,0.1)" },
  { label: "Large", value: "0 10px 15px rgba(0,0,0,0.2)" },
];

// Contrast calculator
const getContrastTextColor = (hex) => {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186 ? "#000" : "#fff";
};

export default function CustomUI() {
  const router = useRouter();
  const {
    palettes = {
      secondary: {
        main: "#2563EB",
        radius: "8px",
        size: "16px"
      },
      card: {
        radius: "12px",
        shadow: "0 4px 6px rgba(0,0,0,0.1)",
        textSize: "16px"
      }
    },
    updateSecondaryMain,
    updateSecondaryContrast,
    updateSecondaryDark,
    updateSecondaryRadius,
    updateSecondarySize,
    updateCardRadius,
    updateCardShadow,
    updateCardTextSize
  } = usePalette();

  const [selectedComponent, setSelectedComponent] = useState("Button");
  const [buttonColor, setButtonColor] = useState(palettes.secondary?.main || "#2563EB");
  const [buttonRadius, setButtonRadius] = useState(palettes.secondary?.radius || "8px");
  const [cardRadius, setCardRadius] = useState(palettes.card?.radius || "12px");
  const [buttonSize, setButtonSize] = useState(palettes.secondary?.size || "16px");
  const [cardSize, setCardSize] = useState(palettes.card?.textSize || "16px");
  const [cardShadow, setCardShadow] = useState(palettes.card?.shadow || "0 4px 6px rgba(0,0,0,0.1)");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (palettes) {
      setButtonColor(palettes.secondary?.main || "#2563EB");
      setButtonRadius(palettes.secondary?.radius || "8px");
      setButtonSize(palettes.secondary?.size || "16px");
      setCardRadius(palettes.card?.radius || "12px");
      setCardSize(palettes.card?.textSize || "16px");
      setCardShadow(palettes.card?.shadow || "0 4px 6px rgba(0,0,0,0.1)");
    }
  }, [palettes]);

  useEffect(() => {
    const darkColor = colorOptions.find((c) => c.value === buttonColor)?.dark || buttonColor;
    updateSecondaryMain(buttonColor);
    updateSecondaryContrast(getContrastTextColor(buttonColor));
    updateSecondaryDark(darkColor);
    updateSecondaryRadius(buttonRadius);
    updateSecondarySize(buttonSize);
  }, [buttonColor, buttonRadius, buttonSize]);

  useEffect(() => {
    updateCardRadius(cardRadius);
    updateCardShadow(cardShadow);
    updateCardTextSize(cardSize);
    console.log("Card properties updated:", palettes.card.radius,palettes.card.shadow, palettes.card.textSize);
  }, [cardRadius, cardShadow, cardSize]);

  const navigateHome = () => router.push("/");

  const inputClass = "w-full text-gray-700 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  const renderButtonEditor = () => (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>Button Color</label>
        <select 
          value={buttonColor} 
          onChange={(e) => setButtonColor(e.target.value)} 
          className={inputClass}
        >
          {colorOptions.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Button Border Radius</label>
        <select 
          value={buttonRadius} 
          onChange={(e) => setButtonRadius(e.target.value)} 
          className={inputClass}
        >
          {buttonRadiusOptions.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Button Text Size</label>
        <select 
          value={buttonSize} 
          onChange={(e) => setButtonSize(e.target.value)} 
          className={inputClass}
        >
          {sizeOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderCardEditor = () => (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>Card Border Radius</label>
        <select 
          value={cardRadius} 
          onChange={(e) => setCardRadius(e.target.value)} 
          className={inputClass}
        >
          {cardRadiusOptions.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Card Text Size</label>
        <select 
          value={cardSize} 
          onChange={(e) => setCardSize(e.target.value)} 
          className={inputClass}
        >
          {sizeOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Card Shadow</label>
        <select 
          value={cardShadow} 
          onChange={(e) => setCardShadow(e.target.value)} 
          className={inputClass}
        >
          {shadowOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderButtonPreview = () => {
    const buttonStyle = {
      backgroundColor: buttonColor,
      color: getContrastTextColor(buttonColor),
      fontSize: buttonSize,
      borderRadius: buttonRadius,
    };

    return (
      <Button
        variant="contained"
        className="w-full font-semibold shadow-md transition-all"
        style={buttonStyle}
      >
        Preview Button
      </Button>
    );
  };

  const renderCardPreview = () => {
    return (
      <Card
        className="w-full transition-all"
        style={{
          borderRadius: cardRadius,
          boxShadow: cardShadow,
        }}
      >
        <CardContent className="text-center p-6">
          <h3 className="text-lg font-bold">Preview Card</h3>
          <p style={{ fontSize: cardSize }}>This is a customizable card component.</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-white border-r shadow-md flex flex-col justify-center items-center py-10 space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center align-items-top">Customize-UI</h2>
        {["Button", "Card"].map((comp) => (
          <button
            key={comp}
            className={`px-4 py-3 rounded-xl font-medium w-3/4 text-center transition-all ${
              selectedComponent === comp
                ? "bg-blue-600 text-white shadow-md transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedComponent(comp)}
          >
            {comp}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">{selectedComponent} Customizer</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Editor */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {selectedComponent} Properties
            </h2>
            {selectedComponent === "Button" ? renderButtonEditor() : renderCardEditor()}
          </div>

          {/* Preview */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h2>
            <div className="flex justify-center items-center h-full p-4">
              {selectedComponent === "Button" ? renderButtonPreview() : renderCardPreview()}
            </div>
          </div>
        </div>

        {/* Final Apply Button */}
        <div className="flex justify-center pt-6">
          <Button
            onClick={navigateHome}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            variant="contained"
            style={{
              backgroundColor: hovering
                ? colorOptions.find(c => c.value === buttonColor)?.dark || buttonColor
                : buttonColor,
              color: getContrastTextColor(buttonColor),
              fontSize: buttonSize,
              borderRadius: buttonRadius,
              padding: `${parseInt(buttonSize) / 2}px ${parseInt(buttonSize) * 1.5}px`,
              minWidth: "200px",
            }}
          >
            Apply & Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}