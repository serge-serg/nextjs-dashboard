"use client";
import { usePathname } from "next/navigation";
export default ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className={pathname === "/course" ? "links-wrapper" : "quiz-container"}>
      {children}
    </main>
  );
};
