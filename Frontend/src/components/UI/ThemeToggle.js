import React, { useState, useEffect } from 'react';

function ThemeToggle ({ theme }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <span className="dark:text-gray-500">Light</span>
        <div
          onClick={handleThemeChange}
          className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
            darkMode ? 'bg-gray-600' : 'bg-blue-500'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              darkMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          ></div>
        </div>
        <span className="text-gray-900 dark:text-gray-500">Dark</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
