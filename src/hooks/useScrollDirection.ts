import { useEffect, useRef, useState } from "react";

interface UseScrollDirectionOptions {
  threshold?: number;
}

interface ScrollState {
  isVisible: boolean;
  scrollY: number;
  direction: "up" | "down" | null;
}

export function useScrollDirection({
  threshold = 100,
}: UseScrollDirectionOptions = {}) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isVisible: true,
    scrollY: 0,
    direction: null,
  });

  const lastScrollY = useRef(0);
  const hideDistance = useRef(0);
  const ticking = useRef(false);

  const offsetFromTop = window.innerHeight;

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY.current) < 5) {
        ticking.current = false;
        return;
      }

      const direction = scrollY > lastScrollY.current ? "down" : "up";

      setScrollState((prevState) => {
        let isVisible = prevState.isVisible;

        // Only start hiding after scrolling past the offset from top
        if (scrollY < offsetFromTop) {
          isVisible = true;
          hideDistance.current = 0;
        } else {
          if (direction === "down") {
            hideDistance.current += scrollY - lastScrollY.current;
            if (hideDistance.current >= threshold) {
              isVisible = false;
            }
          } else if (direction === "up") {
            // Show when scrolling up
            isVisible = true;
            hideDistance.current = 0;
          }
        }

        return {
          isVisible,
          scrollY,
          direction,
        };
      });

      lastScrollY.current = scrollY;
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    const handleScroll = () => requestTick();

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}
