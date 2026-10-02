import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

type TiltSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function RevealGroup({ children, className = "" }: RevealGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      group.dataset["visible"] = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        group.dataset["visible"] = "true";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={groupRef} className={`reveal-group ${className}`}>
      {children}
    </div>
  );
}

export function TiltSurface({ children, className = "" }: TiltSurfaceProps) {
  const surfaceRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const surface = surfaceRef.current;
    if (!surface) return;

    const bounds = surface.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    surface.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
    surface.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
    surface.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    surface.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  function resetTilt() {
    const surface = surfaceRef.current;
    if (!surface) return;
    surface.style.removeProperty("--tilt-x");
    surface.style.removeProperty("--tilt-y");
    surface.style.removeProperty("--glow-x");
    surface.style.removeProperty("--glow-y");
  }

  return (
    <div
      ref={surfaceRef}
      className={`tilt-surface ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}
    </div>
  );
}