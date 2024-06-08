import { useState } from "react";

export const BackgroundPage = () => {
  const colors = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Cyan", value: "#00ffff" },
    { name: "Magenta", value: "#ff00ff" },
  ];

  const [bgColor, setBgColor] = useState("#ffffff");
  const [colorMode, setColorMode] = useState("RGB");
  const [colorValues, setColorValues] = useState({
    r: 255,
    g: 255,
    b: 255,
    hex: "#ffffff",
    h: 0,
    s: 100,
    l: 100,
  });

  const handleColorChange = (color) => {
    setBgColor(color.value);
    if (colorMode === "RGB") {
      const rgb = hexToRgb(color.value);
      setColorValues({ ...colorValues, r: rgb.r, g: rgb.g, b: rgb.b });
    } else if (colorMode === "HEX") {
      setColorValues({ ...colorValues, hex: color.value });
    } else if (colorMode === "HSL") {
      const hsl = hexToHsl(color.value);
      setColorValues({ ...colorValues, h: hsl.h, s: hsl.s, l: hsl.l });
    }
  };

  const handleModeChange = (mode) => {
    setColorMode(mode);
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setColorValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };
      if (colorMode === "RGB") {
        const hex = rgbToHex(newValues.r, newValues.g, newValues.b);
        setBgColor(hex);
        setColorValues({ ...newValues, hex });
      } else if (colorMode === "HEX") {
        const hex = rgbToHex(newValues.r, newValues.g, newValues.b);
        setBgColor(hex);
        setColorValues({ ...newValues, hex });
      } else if (colorMode === "HSL") {
        const hslString = `hsl(${newValues.h}, ${newValues.s}%, ${newValues.l}%)`;
        setBgColor(hslString);
        const textColor = newValues.l >= 50 ? "black" : "white";
        setColorValues({ ...newValues, textColor });
      }
      return newValues;
    });
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const hexToHsl = (hex) => {
    let { r, g, b } = hexToRgb(hex);
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgbToHex = (r, g, b) => {
    const toHex = (c) => c.toString(16).padStart(2, "0");
    return `#${toHex(parseInt(r))}${toHex(parseInt(g))}${toHex(parseInt(b))}`;
  };

  // Function to calculate the appropriate text color for contrast
  const getContrastYIQ = (hexcolor) => {
    const { r, g, b } = hexToRgb(hexcolor);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  const textColor =
    colorMode === "HSL"
      ? colorValues.l >= 50
        ? "black"
        : "white"
      : getContrastYIQ(bgColor);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex space-x-4 mb-8">
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-12 h-12 rounded-full shadow-md border-4"
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorChange(color)}
          ></button>
        ))}
      </div>
      <div className="flex space-x-4 mb-8">
        {["RGB", "HEX", "HSL"].map((mode) => (
          <label key={mode} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={colorMode === mode}
              onChange={() => handleModeChange(mode)}
            />
            <span style={{ color: textColor }}>{mode}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4 w-80">
        {colorMode === "RGB" && (
          <>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                R:
              </label>
              <input
                type="range"
                name="r"
                min="0"
                max="255"
                value={colorValues.r}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                G:
              </label>
              <input
                type="range"
                name="g"
                min="0"
                max="255"
                value={colorValues.g}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                B:
              </label>
              <input
                type="range"
                name="b"
                min="0"
                max="255"
                value={colorValues.b}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
          </>
        )}
        {colorMode === "HEX" && (
          <>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                R:
              </label>
              <input
                type="range"
                name="r"
                min="0"
                max="255"
                value={colorValues.r}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                G:
              </label>
              <input
                type="range"
                name="g"
                min="0"
                max="255"
                value={colorValues.g}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                B:
              </label>
              <input
                type="range"
                name="b"
                min="0"
                max="255"
                value={colorValues.b}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
          </>
        )}
        {colorMode === "HSL" && (
          <>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                H:
              </label>
              <input
                type="range"
                name="h"
                min="0"
                max="360"
                value={colorValues.h}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                S:
              </label>
              <input
                type="range"
                name="s"
                min="0"
                max="100"
                value={colorValues.s}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label className="w-8" style={{ color: textColor }}>
                L:
              </label>
              <input
                type="range"
                name="l"
                min="0"
                max="100"
                value={colorValues.l}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
          </>
        )}
        <div className="mt-4 text-lg" style={{ color: textColor }}>
          {colorMode === "RGB"
            ? `RGB: (${colorValues.r}, ${colorValues.g}, ${colorValues.b})`
            : colorMode === "HSL"
            ? `HSL: (${colorValues.h}, ${colorValues.s}%, ${colorValues.l}%)`
            : `HEX: ${colorValues.hex}`}
        </div>
      </div>
    </div>
  );
};
