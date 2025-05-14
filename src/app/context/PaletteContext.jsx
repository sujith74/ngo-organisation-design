'use client';
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
    main: "#E9BD29",
    dark: "#d5a916",
    contrastText: "#000",
    radius: "12px", // default radius
    size: "16px"     // default size
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

  if (!palettes) return null;

  return (
    <PaletteContext.Provider
      value={{
        palettes,
        updateSecondaryMain,
        updateSecondaryContrast,
        updateSecondaryDark,
        updateSecondaryRadius,
        updateSecondarySize
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
