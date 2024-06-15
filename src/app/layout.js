import Navbar from "@/components/Navbar/index";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import AdSense from "@/utils/adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "na memória",
  description: "Compartilhando memórias inesquecíveis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5562188841194106"
      crossorigin="anonymous"></script>
    </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <AdSense />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}