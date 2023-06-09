"use client";
import "@/app/globals.css";
import SupabaseProvider from "@/app/Supabase-provider";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SupabaseProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
