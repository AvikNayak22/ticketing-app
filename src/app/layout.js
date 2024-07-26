import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Made by Avik Nayak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
