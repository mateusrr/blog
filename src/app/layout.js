import Navbar from "@/components/Navbar/index";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

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
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5562188841194106"
                  crossorigin="anonymous"></script>
                  {/* Bloco1 */}
                  <ins className="adsbygoogle"
                    style={{display:'block'}}
                    data-ad-client="ca-pub-5562188841194106"
                    data-ad-slot="5786915546"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script>
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}