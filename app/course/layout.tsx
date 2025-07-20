"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const defaultPath = "/course";
  return (
    <main className={pathname === defaultPath ? "links-wrapper" : "quiz-container"}>
      {pathname !== defaultPath && <Link href={defaultPath} className="absolute right-0 top-0 block text-blue-600 pt-3 pr-6">🏠 Course Home</Link>}
      {children}
    </main>
  );
};
