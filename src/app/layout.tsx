import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/app/layouts/__header";

export const metadata: Metadata = {
  title: "RecipeAI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-auto max-w-lg h-auto max-h-lg p-6">
        <main>
          <section>
            {/* Header Section */}
            <Header />
            {/* Header Section Ends */}
          </section>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
