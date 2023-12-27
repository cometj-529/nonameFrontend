import useSWR from "swr";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Noto_Sans_KR } from "@next/font/google";

export const metadata = {
  title: "title",
  description: "Generated by HS",
};

const notoSantKR = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--notoF",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={notoSantKR.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
