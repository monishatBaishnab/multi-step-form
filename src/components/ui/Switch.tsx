// Switch.js
import React from "react";

const Switch = ({
  onChange,
  isDark,
}: {
  onChange: () => void;
  isDark: boolean;
}) => {
  // State to control the switch

  const handleToggle = () => {
    onChange();
  };

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="switch" className="flex items-center cursor-pointer">
        {/* Hidden checkbox input */}
        <input
          type="checkbox"
          id="switch"
          className="sr-only"
          checked={isDark}
          onChange={handleToggle}
        />
        {/* Switch Background */}
        <div
          className={`w-14 h-7 bg-gray-300 rounded-full p-1 transition-colors duration-300 ${
            isDark ? "!bg-blue-500" : "bg-gray-300"
          }`}
        >
          {/* Switch Knob */}
          <div
            className={`size-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-7" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
