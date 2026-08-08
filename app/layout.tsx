import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuwaiqOS — Independent at the core",
  description: "TuwaiqOS is an independent Saudi-built experimental operating system written in Rust.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
