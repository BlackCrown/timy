
import Header from "@/components/Header/page";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Header />
      <body>
        {children}
      </body>
    </html>
  );
}
