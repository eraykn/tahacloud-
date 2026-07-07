"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  // Respect reduced-motion: fall back to native scroll.
  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        // Ease-out curve for premium momentum feel.
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      }}
    >
      {children}
    </ReactLenis>
  );
}
