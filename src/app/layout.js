import { NextUIProvider } from "@nextui-org/react";
import { inconsolata, caveat } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Todos",
  description: "Track your todos here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} ${caveat.variable}`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
