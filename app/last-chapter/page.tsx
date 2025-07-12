"use client";
import Link from "next/link";
import tw from "tailwind-styled-components";
export default function LastChapter() {
  const ChapterLink = tw(Link)`
    text-blue-900
    hover:underline
  `;
  const chapters = [
    { title: "Previous Chapter: 3",
      href: "optimizing-fonts-images" 
    },
    { title: "Last Chapter: 4",
      href: "#" 
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {chapters.map((chapter, index) => (
            <ChapterLink
              key={index}
              href={`https://nextjs.org/learn/dashboard-app/${chapter.href}`}
            >
              {chapter.title}
              {index < chapters.length - 1 && " | "}
            </ChapterLink>
          ))}
        </h1>
      </div>
    </main>
  );
}
