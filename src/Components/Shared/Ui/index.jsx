import React, { useState } from "react";

const colors = {
  primary: "#16c3e7",
  secondary: "#ffa02f",
  accent: "#ffdb73",
  dark: "#3480b8",
  x: "#faedcd",
  cream: "#d6ccc2",
  navy: "#1d3557",
  steel: "#4C585B",
  sky: "#4cc9f0",
  cyan: "#36a3e1",
  ocean: "#188bcb",
  softBlue: "#a0d9f2",
  coolBlue: "#168aad",
  sand: "#f2b65d",
  orange: "#f28f00",
  teal: "#3e6570",
  olive: "#a3a300",
  lime: "#c2c200",
  rose: "#f0547a",
  crimson: "#e83f61",
  red: "#ff4d4d",
  brightRed: "#ff3333",
  amber: "#ffb300",
  gray: "#cccccc",
};

const ThemeColors = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (name) => {
    const utilityClass = `bg-${name}`;
    navigator.clipboard.writeText(utilityClass);
    setCopied(utilityClass);
    setTimeout(() => setCopied(""), 1000);
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        🎨 Theme Color Utilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(colors).map(([name, hex]) => (
          <div
            key={name}
            onClick={() => handleCopy(name)}
            className="border rounded-lg p-4 bg-white hover:shadow-lg cursor-pointer transition-all group"
          >
            {/* Color Preview */}
            <div
              className="h-12 w-full rounded-md mb-3"
              style={{ backgroundColor: hex }}
            ></div>

            {/* Color Name & Hex */}
            <p className="text-sm font-semibold capitalize text-gray-700 mb-1">
              {name}{" "}
              <span className="text-gray-400 font-normal">({hex})</span>
            </p>

            {/* Utility Class Examples */}
            <div className="text-xs space-y-1 mt-2">
              <p>
                <span className="font-medium">BG Class:</span>{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-600">
                  bg-{name}
                </code>
              </p>
              <p>
                <span className="font-medium">Text Class:</span>{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-600">
                  text-{name}
                </code>
              </p>
              <p>
                <span className="font-medium">Border Class:</span>{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-600">
                  border-{name}
                </code>
              </p>
            </div>

            {/* Copy Feedback */}
            <p className="text-sm mt-3 text-green-600 font-medium h-4">
              {copied === `bg-${name}` ? `Copied: ${copied}` : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeColors;
