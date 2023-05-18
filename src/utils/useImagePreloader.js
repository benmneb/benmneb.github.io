import { useEffect, useState } from 'react';

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject(src);
    img.src = src;
  });
}

export default function useImagePreloader(imageSrc) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      if (isCancelled) return;
      await preloadImage(imageSrc);
      if (isCancelled) return;
      setImageIsLoaded(true);
    })();

    return () => (isCancelled = true);
  }, [imageSrc]);

  return imageIsLoaded;
}
