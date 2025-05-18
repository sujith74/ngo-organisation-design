"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const PaletteContext = createContext();

const defaultPalette = {
  primary: {
    light: "#4C9F38",
    main: "#4C9F38",
    dark: "#4C9F38",
    contrastText: "#fff"
  },
  secondary: {
    light: "#eecd5e",
    main: "#D97706",
    dark: "#d5a916",
    contrastText: "#fff",
    radius: "12px", // default button radius
    size: "16px"    // default text size
  },
  card: {
    radius: "12px", // default card radius
    shadow: "0 4px 6px rgba(0,0,0,0.1)", // default card shadow
    textSize: "16px" // default card text size
  },
  text: {
    headingFont: "'Roboto', sans-serif",
    headingWeight: "700",
    subheadingFont: "'Open Sans', sans-serif",
    subheadingWeight: "400",
    headingColor: "#000000",
    subheadingColor: "#333333"
  }
};

export const PaletteProvider = ({ children }) => {
  const [palettes, setPalettes] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("palettes");
    if (stored) {
      setPalettes(JSON.parse(stored));
    } else {
      setPalettes(defaultPalette);
    }
  }, []);

  useEffect(() => {
    if (palettes) {
      localStorage.setItem("palettes", JSON.stringify(palettes));
    }
  }, [palettes]);

  // Button/Secondary updates
  const updateSecondaryMain = (newColor) => {
    setPalettes((prev) => ({
      ...prev,
      secondary: {
        ...prev.secondary,
        main: newColor
      }
    }));
  };

  const updateSecondaryContrast = (newColor) => {
    setPalettes((prev) => ({
      ...prev,
      secondary: {
        ...prev.secondary,
        contrastText: newColor
      }
    }));
  };

  const updateSecondaryDark = (darkColor) => {
    setPalettes((prev) => ({
      ...prev,
      secondary: {
        ...prev.secondary,
        dark: darkColor
      }
    }));
  };

  const updateSecondaryRadius = (newRadius) => {
    setPalettes((prev) => ({
      ...prev,
      secondary: {
        ...prev.secondary,
        radius: newRadius
      }
    }));
  };

  const updateSecondarySize = (newSize) => {
    setPalettes((prev) => ({
      ...prev,
      secondary: {
        ...prev.secondary,
        size: newSize
      }
    }));
  };

  // Card updates
  const updateCardRadius = (newRadius) => {
    setPalettes((prev) => ({
      ...prev,
      card: {
        ...prev.card,
        radius: newRadius
      }
    }));
  };

  const updateCardShadow = (newShadow) => {
    setPalettes((prev) => ({
      ...prev,
      card: {
        ...prev.card,
        shadow: newShadow
      }
    }));
  };

  const updateCardTextSize = (newSize) => {
    setPalettes((prev) => ({
      ...prev,
      card: {
        ...prev.card,
        textSize: newSize
      }
    }));
  };

  // Text updates
  const updateHeadingFont = (newFont) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        headingFont: newFont
      }
    }));
  };

  const updateHeadingWeight = (newWeight) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        headingWeight: newWeight
      }
    }));
  };

  const updateSubheadingFont = (newFont) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        subheadingFont: newFont
      }
    }));
  };

  const updateSubheadingWeight = (newWeight) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        subheadingWeight: newWeight
      }
    }));
  };

  const updateHeadingColor = (newColor) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        headingColor: newColor
      }
    }));
  };

  const updateSubheadingColor = (newColor) => {
    setPalettes((prev) => ({
      ...prev,
      text: {
        ...prev.text,
        subheadingColor: newColor
      }
    }));
  };

  if (!palettes) return null;

  return (
    <PaletteContext.Provider
      value={{
        palettes,
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
        updateSubheadingWeight,
        updateHeadingColor,
        updateSubheadingColor
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error("usePalette must be used within a PaletteProvider");
  }
  return context;
};