import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, variant = "primary", className }: Props) {
  const baseStyles = "px-6 py-3 rounded-2xl font-medium transition-all";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-accent text-base hover:opacity-90",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
}
