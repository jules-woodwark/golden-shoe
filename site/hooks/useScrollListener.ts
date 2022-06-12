import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const isBrowser = typeof window !== 'undefined';

const useScrollListener = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      const handleScroll = throttle(() => {
        const offset = 0;
        const { scrollTop } = document.documentElement;
        const scrolled = scrollTop > offset;

        if (hasScrolled !== scrolled) {
          setHasScrolled(scrolled);
        }
      }, 200);

      document.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasScrolled]);

  return { hasScrolled };
};

export default useScrollListener;
