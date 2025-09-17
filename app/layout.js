import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArthyaAi",
  description: "All in one finance tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head /> 
        <body className={inter.className}>
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="min-h-screen">{children}</main>

          {/* Notifications */}
          <Toaster richColors />

          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with love ❤️‍🔥 by Pranav Sherekar</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
