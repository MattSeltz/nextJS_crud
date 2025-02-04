import { Montserrat } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "Crud",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <NavBar></NavBar>
        <main className="flex justify-center items-center h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
