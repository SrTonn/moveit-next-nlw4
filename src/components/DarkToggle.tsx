import React, { useEffect, useState } from "react"
import Toggle from "react-toggle"

const DARK_CLASS = 'dark'

export const DarkToggle = () => {
  const [isDark, setIsDark] = useState(false);
  // const [theme, setTheme] = usePersistedState('darkTheme', true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
    
    // Cookies.set('isDark', String(isDark))
  }, [isDark]);

  return (
    <Toggle
      className="DarkToggle"
      checked={isDark}
      onChange={event => setIsDark(event.target.checked)}
      // icons={{ checked: "🌙", unchecked: "🔆" }}
      icons={false}
      aria-label="Dark mode"
    />
  );
};

export default DarkToggle