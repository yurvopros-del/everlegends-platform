import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));

    // Retry a few times because sections can mount after route render
    let tries = 0;
    const maxTries = 30;

    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      tries += 1;
      if (tries < maxTries) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  }, [location.key, location.hash]);

  return null;
}
