import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

import Nav from "@/components/layout/Navigation";
import Footer from "@/components/layout/footer";

import { Suspense } from "react";
export const metadata = {
  title: "Aimonk.io - Ai based web services",
  description:
    "Aimonk.io is the an AI based Tech Services. Expert in NextJS, Builder.io web services ",
  metadataBase: new URL("https://aimonk.io"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}