// components/mode-toggle.tsx
import * as React from 'react';

export function ModeToggle({ className }: { className?: string }) {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      className={`${className} p-2 rounded-full bg-gray-300 dark:bg-gray-700`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <span className="text-white">🌙</span>
      ) : (
        <span className="text-black">☀️</span>
      )}
    </button>
  );
}
