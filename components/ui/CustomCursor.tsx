"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX - 20) * 0.12;
      followerY += (mouseY - followerY - 20) * 0.12;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
    };

    const onLinkHover = () => {
      cursor.style.transform += " scale(1.5)";
      follower.style.transform += " scale(1.5)";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden lg:block"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower hidden lg:block"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </>
  );
}
