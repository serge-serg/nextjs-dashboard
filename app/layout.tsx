import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Link
          href="/last-chapter"
          className="absolute"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            right: "54px",
            top: "44px",
          }}>Last Chapter</Link>
        {children}
      </body>
    </html>
  );
}
