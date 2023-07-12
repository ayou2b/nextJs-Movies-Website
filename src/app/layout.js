"use client";
import "./globals.css";
import { Providers } from "@/GlobalRedux/Provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/UI/Menu";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "react-loading-skeleton/dist/skeleton.css";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <ThemeProvider>
          <Providers>
            <Header></Header>
            <Menu></Menu>
            {children}
          </Providers>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
