import { Josefin_Sans, Alata } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const alata = Alata({
  variable: "--font-alata",
  subsets: ["latin"],
  weight: ["400"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefinSans",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata = {
  title: "LoopStudios",
  description: "LoopStudios Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${josefin.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
