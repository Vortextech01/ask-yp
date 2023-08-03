import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}