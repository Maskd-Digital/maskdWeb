"use client";

import "./SpotlightBackground.css";

/**
 * Hero backdrop — Figma blob keyframes (1440×1024)
 * + Rectangle 17 cylinder tile stacked ABOVE the moving blobs.
 */
export function SpotlightBackground() {
  return (
    <div className="spotlight" aria-hidden="true">
      {/* Moving glows — behind the cylinder wall */}
      <div className="spotlight__blobs">
        <div className="spotlight__blob spotlight__blob--1" />
        <div className="spotlight__blob spotlight__blob--2" />
        <div className="spotlight__blob spotlight__blob--3" />
        <div className="spotlight__blob spotlight__blob--4" />
      </div>

      {/* Figma Rectangle 17 — vertical cylinders over the blobs */}
      <div className="spotlight__cylinders" />
    </div>
  );
}
