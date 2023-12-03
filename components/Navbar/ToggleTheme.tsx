"use client";

import * as React from "react";
import { Button } from "../ui/button";
import { Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleTheme() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <Button asChild variant="outline" onClick={handleChangeTheme} className="cursor-pointer">
      {theme === "dark" ? <SunMoon size={50} /> : <Moon size={50} />}
    </Button>
  );
}

export default ToggleTheme;
