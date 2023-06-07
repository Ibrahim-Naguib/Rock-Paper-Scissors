import "./globals.css";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Header, RulesBtn, ModeBtn } from "@/components/index";

const Barlow = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rock, Paper, Scissors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Barlow.className} relative`}>
        <div className="gradient"></div>
        <main className="relative overflow-hidden min-h-screen flex items-center gap-[35px] pt-10 flex-col px-6 md:px-24 lg:px-36 xl:px-80">
          <Header />

          {children}
          <ModeBtn />
          <RulesBtn />
        </main>
      </body>
    </html>
  );
}
