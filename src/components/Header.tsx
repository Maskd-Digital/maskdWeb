"use client";

import { useEffect, useId, useState } from "react";
import "./Header.css";

const NAV = [
  { label: "Our Origin", href: "#about" },
  { label: "Our Capabilities", href: "#capabilities" },
  { label: "Our Masterpieces", href: "#work" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`header ${open ? "header--open" : ""}`}>
      <a className="header__logo" href="#top" aria-label="Mask'd home" onClick={closeMenu}>
        <img src="/assets/logo-maskd.png" alt="Mask'd" width={72} height={72} />
      </a>

      <button
        type="button"
        className="header__toggle"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="header__toggle-bar" />
        <span className="header__toggle-bar" />
        <span className="header__toggle-bar" />
      </button>

      <nav
        id={menuId}
        className="header__nav"
        aria-label="Primary"
        data-open={open ? "true" : "false"}
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <button
          type="button"
          className="header__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
