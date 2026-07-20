"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "./Navbar.module.css";

const links = [
  { label: "الرئيسية", href: "#", active: true, caret: false },
  { label: "منصات الذكاء الاصطناعي", href: "#platforms", active: false, caret: true },
  { label: "الخدمات", href: "#services", active: false, caret: true },
  { label: "أعمالنا", href: "#works", active: false, caret: false },
  { label: "تواصل معنا", href: "#contact", active: false, caret: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Transformix">
          <Image src="/assets/logo.svg" alt="Transformix" width={85} height={54} priority />
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {link.caret && (
                <span className={styles.caret} aria-hidden="true">
                  <Image src="/assets/nav-caret.svg" alt="" width={10} height={5} />
                </span>
              )}
              {link.label}
            </a>
          ))}
          <Button size="md" className={styles.ctaMobile} href="#contact">
            تواصل معنا
          </Button>
        </nav>

        <Button size="md" className={styles.cta} href="#contact">
          تواصل معنا
        </Button>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="القائمة"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
