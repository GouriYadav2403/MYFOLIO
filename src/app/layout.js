import { Inter, Outfit } from "next/font/google";
import { Providers } from "./components/providers/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gouri Yadav | Full-Stack Developer",
  description: "Portfolio of Gouri Yadav, Full-Stack Developer and Computer Science Engineering student building scalable web applications and enterprise systems.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
