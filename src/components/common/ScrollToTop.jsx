import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on every route change, unless the URL carries a hash
// (in which case the Navbar's own scroll-into-view handles positioning).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }, [pathname, hash]);

  return null;
}
