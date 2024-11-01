import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/header/Header";
import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nguyễn Nhật Sang Portfolio",
  icons: "./icon.svg",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          {children}
          {/* <SidebarProvider defaultOpen={defaultOpen}>
            <SidebarTrigger />

          </SidebarProvider> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
