import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Обновляем состояние только если значение изменилось
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query, matches]); // Добавляем matches в зависимости

  return matches;
};

export default useMediaQuery;