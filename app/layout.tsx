import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar/Navbar";

const poppins = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "YAFREEKA",
  description: "DO MORE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Theme
          appearance="light"
          accentColor="jade"
          radius="full"
          scaling="105%"
        >
          <Navbar />
          <div>{children}</div>
        </Theme>
      </body>
    </html>
  );
}
