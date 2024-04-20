import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import TopNav from "./_components/TopNav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NEXT-14-GALLERY",
  description: "To implement all the latest feature of next drizzle and more.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
