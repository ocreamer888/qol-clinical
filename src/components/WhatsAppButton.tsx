"use client";

import type { ReactNode } from "react";

import { buildWhatsAppHref } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
  /** Prefilled chat text (wa.me `text` query). */
  message?: string;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function WhatsAppButton({
  className,
  children = "WhatsApp",
  "aria-label": ariaLabel = "Abrir WhatsApp",
  message,
}: WhatsAppButtonProps) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const href = buildWhatsAppHref(digitsOnly(rawNumber), message);

  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
