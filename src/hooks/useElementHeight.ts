import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to track the height of a DOM element
 * @returns [ref, height] - ref to attach to element and current height
 */
export function useElementHeight<T extends HTMLElement = HTMLDivElement>(): [
  React.RefObject<T | null>,
  number,
] {
  const elementRef = useRef<T>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial height
    setHeight(element.offsetHeight);

    // Create ResizeObserver to track height changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(element);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [elementRef, height];
}
