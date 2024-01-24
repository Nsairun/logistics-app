import { AppContextProvider } from "../../hooks/AppContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#fff",
          color: "#000",
          width: "100%",
          fontFamily: "EB Garamond",
          font: "caption",
        }}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
