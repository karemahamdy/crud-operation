import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "posts placeholder",
  description: "this crud app for posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-4 my-4 mx-auto text-slate-800">
          <main className="p-4 text-lg">{children}</main>
        </div>
      </body>
    </html>
  );
}
