import { useEffect, useRef, useState } from 'react';

// Animates a numeric value from 0 to `end` once `start` is true. Used by the
// statistics section so counters only run when scrolled into view.
export default function useCountUp(end, { start = true, duration = 1600 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out-cubic
      setValue(end * eased);

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [start, end, duration]);

  return value;
}
