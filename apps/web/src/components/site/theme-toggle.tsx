import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
