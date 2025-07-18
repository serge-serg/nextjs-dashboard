import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import LastLink from "./ui/last-page-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LastLink textColor="text-white" />
        {children}
      </body>
    </html>
  );
}
