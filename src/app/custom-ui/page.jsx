"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePalette } from "../context/PaletteContext.jsx";
import { Button, Card, CardContent, Typography } from "@mui/material";

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
  { label: "Dark Gray", value: "#363636", dark: "#1E1E1E" }
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

const fontFamilyOptions = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Helvetica", value: "Helvetica, sans-serif" },
  { label: "Times New Roman", value: "'Times New Roman', serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Verdana", value: "Verdana, sans-serif" },
  { label: "Roboto", value: "'Roboto', sans-serif" },
  { label: "Open Sans", value: "'Open Sans', sans-serif" },
  { label: "Montserrat", value: "'Montserrat', sans-serif" },
  { label: "Poppins", value: "'Poppins', sans-serif" },
];

const fontWeightOptions = [
  { label: "Light", value: "300" },
  { label: "Regular", value: "400" },
  { label: "Medium", value: "500" },
  { label: "Bold", value: "700" },
  { label: "Black", value: "900" },
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
      },
      text: {
        headingFont: "'Roboto', sans-serif",
        headingWeight: "700",
        subheadingFont: "'Open Sans', sans-serif",
        subheadingWeight: "400"
      }
    },
    updateSecondaryMain,
    updateSecondaryContrast,
    updateSecondaryDark,
    updateSecondaryRadius,
    updateSecondarySize,
    updateCardRadius,
    updateCardShadow,
    updateCardTextSize,
    updateHeadingFont,
    updateHeadingWeight,
    updateSubheadingFont,
    updateSubheadingWeight
  } = usePalette();

  const [selectedComponent, setSelectedComponent] = useState("Button");
  const [buttonColor, setButtonColor] = useState(palettes.secondary?.main || "#2563EB");
  const [buttonRadius, setButtonRadius] = useState(palettes.secondary?.radius || "8px");
  const [cardRadius, setCardRadius] = useState(palettes.card?.radius || "12px");
  const [buttonSize, setButtonSize] = useState(palettes.secondary?.size || "16px");
  const [cardSize, setCardSize] = useState(palettes.card?.textSize || "16px");
  const [cardShadow, setCardShadow] = useState(palettes.card?.shadow || "0 4px 6px rgba(0,0,0,0.1)");
  const [headingFont, setHeadingFont] = useState(palettes.text?.headingFont || "'Roboto', sans-serif");
  const [headingWeight, setHeadingWeight] = useState(palettes.text?.headingWeight || "700");
  const [subheadingFont, setSubheadingFont] = useState(palettes.text?.subheadingFont || "'Open Sans', sans-serif");
  const [subheadingWeight, setSubheadingWeight] = useState(palettes.text?.subheadingWeight || "400");
  const [hovering, setHovering] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    if (palettes) {
      setButtonColor(palettes.secondary?.main || "#2563EB");
      setButtonRadius(palettes.secondary?.radius || "8px");
      setButtonSize(palettes.secondary?.size || "16px");
      setCardRadius(palettes.card?.radius || "12px");
      setCardSize(palettes.card?.textSize || "16px");
      setCardShadow(palettes.card?.shadow || "0 4px 6px rgba(0,0,0,0.1)");
      setHeadingFont(palettes.text?.headingFont || "'Roboto', sans-serif");
      setHeadingWeight(palettes.text?.headingWeight || "700");
      setSubheadingFont(palettes.text?.subheadingFont || "'Open Sans', sans-serif");
      setSubheadingWeight(palettes.text?.subheadingWeight || "400");
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
  }, [cardRadius, cardShadow, cardSize]);

  useEffect(() => {
    updateHeadingFont(headingFont);
    updateHeadingWeight(headingWeight);
    // Safely access nested properties
    console.log("Heading font and weight updated", 
      palettes?.text?.headingFont || 'default', 
      palettes?.text?.headingWeight || 'default'
    );
  }, [headingFont, headingWeight]);

  useEffect(() => {
    updateSubheadingFont(subheadingFont);
    updateSubheadingWeight(subheadingWeight);
    console.log("Subheading font and weight updated", 
      palettes?.text?.subheadingFont || 'default', 
      palettes?.text?.subheadingWeight || 'default'
    );
  }, [subheadingFont, subheadingWeight]);
// ...existing code...
  const navigateHome = () => router.push("/");

  const inputClass = "w-full text-gray-700 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  const handlePreviewTemplate = () => {
    const params = new URLSearchParams({
      color: palettes?.secondary?.main || "#2563EB",
      radius: palettes?.secondary?.radius || "8px",
      size: palettes?.secondary?.size || "16px",
      cardRadius: palettes?.card?.radius || "12px",
      cardShadow: palettes?.card?.shadow || "0 4px 6px rgba(0,0,0,0.1)",
      cardTextSize: palettes?.card?.textSize || "16px",
      headingFont: palettes?.text?.headingFont || "'Roboto', sans-serif",
      headingWeight: palettes?.text?.headingWeight || "700",
      subheadingFont: palettes?.text?.subheadingFont || "'Open Sans', sans-serif",
      subheadingWeight: palettes?.text?.subheadingWeight || "400",
    }).toString();
  
    router.push(`/preview?${params}`);
  };
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

  const renderTextEditor = () => (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>Heading Font</label>
        <select 
          value={headingFont} 
          onChange={(e) => setHeadingFont(e.target.value)} 
          className={inputClass}
        >
          {fontFamilyOptions.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Heading Weight</label>
        <select 
          value={headingWeight} 
          onChange={(e) => setHeadingWeight(e.target.value)} 
          className={inputClass}
        >
          {fontWeightOptions.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Subheading Font</label>
        <select 
          value={subheadingFont} 
          onChange={(e) => setSubheadingFont(e.target.value)} 
          className={inputClass}
        >
          {fontFamilyOptions.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Subheading Weight</label>
        <select 
          value={subheadingWeight} 
          onChange={(e) => setSubheadingWeight(e.target.value)} 
          className={inputClass}
        >
          {fontWeightOptions.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
const renderContentEditor = () => (
  <div className="space-y-6">
    <div>
      <label className="block font-medium text-gray-700 mb-1">HTML</label>
      <textarea
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
        rows={8}
        className="w-full p-3 border border-gray-300 rounded-md font-mono text-gray-400"
        placeholder="Write your HTML here..."
      />
    </div>

    <div>
      <label className="block font-medium text-gray-700 mb-1">CSS</label>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        rows={6}
        className="w-full p-3 border border-gray-300 rounded-md font-mono text-gray-400"
        placeholder="Write your CSS here..."
      />
    </div>

    <div>
      <label className="block font-medium text-gray-700 mb-1">JavaScript</label>
      <textarea
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
        rows={6}
        className="w-full p-3 border border-gray-300 rounded-md font-mono text-gray-400"
        placeholder="Write your JavaScript here..."
      />
    </div>
  </div>
);

  const renderImageEditor = () => (
    <div className="space-y-6">
      <div className="text-center py-10">
        <p className="text-gray-500">Image customization coming soon</p>
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

  const renderTextPreview = () => {
    return (
      <div className="w-full space-y-4 text-gray-800">
        <Typography 
          variant="h3" 
          style={{ 
            fontFamily: headingFont,
            fontWeight: headingWeight
          }}
        >
          Heading Text Preview
        </Typography>
        <Typography 
          variant="subtitle1" 
          style={{ 
            fontFamily: subheadingFont,
            fontWeight: subheadingWeight
          }}
        >
          Subheading text preview with different font style
        </Typography>
      </div>
    );
  };

  const renderContentPreview = () => {
    const previewDocument = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (e) {
              document.body.innerHTML += "<pre style='color: red'>" + e + "</pre>";
            }
          </script>
        </body>
      </html>
    `;
  
    return (
      <div className="w-full h-[500px] border rounded-lg overflow-hidden">
        <iframe
          title="Live Content Preview"
          srcDoc={previewDocument}
          className="w-full h-full border-none"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  };
  

  const renderImagePreview = () => {
    return (
      <div className="w-full text-center py-10">
        <p className="text-gray-500">Image preview will appear here</p>
      </div>
    );
  };

  const renderEditor = () => {
    switch(selectedComponent) {
      case "Button": return renderButtonEditor();
      case "Card": return renderCardEditor();
      case "Text": return renderTextEditor();
      case "Content": return renderContentEditor();
      case "Image": return renderImageEditor();
      default: return renderButtonEditor();
    }
  };

  const renderPreview = () => {
    switch(selectedComponent) {
      case "Button": return renderButtonPreview();
      case "Card": return renderCardPreview();
      case "Text": return renderTextPreview();
      case "Content": return renderContentPreview();
      case "Image": return renderImagePreview();
      default: return renderButtonPreview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-white border-r shadow-md flex flex-col justify-center items-center py-10 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center align-items-top">Customize-UI</h2>
        {["Button", "Card", "Text", "Content"].map((comp) => (
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

        <div className="absolute bottom-4 text-xs text-gray-400">
          v1.0 UI Editor
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 space-y-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{selectedComponent} Customizer</h1>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePreviewTemplate}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Preview Template
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Editor */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {selectedComponent} Properties
            </h2>
            {renderEditor()}
          </div>

          {/* Preview */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h2>
            <div className="flex flex-wrap justify-center items-center h-full p-4">
              {renderPreview()}
            </div>
          </div>
        </div>

        {/* Final Apply Button */}
        <div className="flex justify-center ml-20 pt-6">
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