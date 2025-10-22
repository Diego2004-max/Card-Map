import "./globals.css";

export const metadata = {
  title: "Running Card",
  description: "OSM Running Card con Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-amber-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
