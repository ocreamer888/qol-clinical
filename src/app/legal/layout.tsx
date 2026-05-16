import Link from "next/link";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-bg-light font-body text-text-primary">
      <header className="bg-[#28574e] text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-6 lg:px-12">
          <Link href="/" className="text-xl font-medium">
            QOL Clinical
          </Link>
          <Link href="/" className="text-sm text-white/80 transition-colors hover:text-white">
            Inicio
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-8 py-12 lg:px-12">{children}</main>
    </div>
  );
}
