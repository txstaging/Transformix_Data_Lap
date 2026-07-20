import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "light" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  variant = "light",
  size = "lg",
  className = "",
  href = "#",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
