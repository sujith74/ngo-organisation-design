"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePalette } from "../context/PaletteContext.jsx";
import { Button } from "@mui/material";

// Attractive color options
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

const radiusOptions = [
  { label: "Small", value: "2px" },
  { label: "Medium", value: "4px" },
  { label: "Large", value: "8px" },
  { label: "XL", value: "12px" },
  { label: "2XL", value: "16px" },
  { label: "Full", value: "9999px" }, // Full pill shape
];


// Button size options
const sizeOptions = [
  { label: "Small", value: "12px" },
  { label: "Medium", value: "16px" },
  { label: "Large", value: "20px" },
];


// Utility for readable contrast
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
  const [selectedColor, setSelectedColor] = useState("#2563EB");
  const { palettes, updateSecondaryMain, updateSecondaryContrast, updateSecondaryDark, updateSecondaryRadius, updateSecondarySize } = usePalette();
  const [selectedRadius, setSelectedRadius] = useState("rounded-xl");
  const [selectedSize, setSelectedSize] = useState("py-3 text-base");


  const handleColorChange = (e) => {
    const newColor = e.target.value;
    const contrast = getContrastTextColor(newColor);
    const darkColor = colorOptions.find((c) => c.value === newColor)?.dark || newColor;

    setSelectedColor(newColor);
    updateSecondaryMain(newColor);
    updateSecondaryContrast(contrast);
    updateSecondaryDark(darkColor);
  };
  
  const handleRadiusChange = (e) => {
    setSelectedRadius(e.target.value);
    updateSecondaryRadius(e.target.value); // update context and localStorage
  };
  
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    updateSecondarySize(e.target.value); // update context and localStorage
  };
  


  const handlePreviewClick = () => {
    router.push("/");
  };

  useEffect(() => {
    console.log("Main:", palettes.secondary.main);
    console.log("Dark:", palettes.secondary.dark);
    console.log("Contrast Text:", palettes.secondary.contrastText);
    console.log("Radius:", palettes.secondary.radius);
    console.log("Size:", palettes.secondary.size);
  }, [palettes.secondary]);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 px-4">
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Custom UI – Customize Button</h1>

      {/* Color Dropdown */}
      <select
        value={selectedColor}
        onChange={handleColorChange}
        className="w-full text-gray-700 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {colorOptions.map((color) => (
          <option key={color.value} value={color.value}>
            {color.label}
          </option>
        ))}
      </select>

      {/* Border Radius Dropdown */}
      <select
        value={selectedRadius}
        onChange={handleRadiusChange}
        className="w-full text-gray-700 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {radiusOptions.map((radius) => (
          <option key={radius.value} value={radius.value}>
            Border: {radius.label}
          </option>
        ))}
      </select>

      {/* Button Size Dropdown */}
      <select
        value={selectedSize}
        onChange={handleSizeChange}
        className="w-full text-gray-700 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {sizeOptions.map((size) => (
          <option key={size.value} value={size.value}>
            Size: {size.label}
          </option>
        ))}
      </select>

      {/* Preview Button */}
      <Button
        className={` font-semibold shadow-md transition-all duration-300`}
        variant="contained" 

        style={{
        
          backgroundColor: selectedColor,
          color: getContrastTextColor(selectedColor),
          fontSize: selectedSize,
          borderRadius: selectedRadius,
        }}
      >
        Preview Color
      </Button>

      <hr className="my-2" />

      {/* Navigation Button */}
      <Button
        onClick={handlePreviewClick}
        className={` font-semibold shadow-md transition-all duration-300 border `}
        variant="contained" 
        style={{
      
          backgroundColor: selectedColor,
          color: getContrastTextColor(selectedColor),
          borderColor: selectedColor,
          fontSize: selectedSize,
          borderRadius: selectedRadius,
        }}
      >
        Home Page →
      </Button>
    </div>
  </div>
  );
}
