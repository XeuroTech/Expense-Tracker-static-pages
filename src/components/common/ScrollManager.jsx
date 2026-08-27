'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Handles scroll position on every route change, from anywhere on the
// site:
// - No hash in the URL -> jump to the top of the new page.
// - A hash (e.g. "/#features") -> smooth-scroll to that section once it
//   exists in the DOM. Retries on the next animation frame instead of a
//   fixed delay, so it works reliably even when the target page (and its
//   section) is still mounting.
//
// Next's `usePathname()` doesn't include the hash, so this also listens
// for hash changes directly (covers same-page section links, which don't
// trigger a Next navigation at all since the pathname doesn't change).
export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    let frameId;

    const scrollToHash = (hash) => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
        return;
      }

      const id = hash.slice(1);
      let attempts = 0;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        attempts += 1;
        if (attempts < 90) {
          frameId = requestAnimationFrame(tryScroll);
        }
      };

      tryScroll();
    };

    scrollToHash(window.location.hash);

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('hashchange', onHashChange);
    };
    // Re-run whenever the route (pathname) changes, in addition to hash changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
