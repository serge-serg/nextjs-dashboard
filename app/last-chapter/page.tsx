"use client";
import { Fragment } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
export default function LastChapter() {
  const ChapterLink = tw(Link)`
    inline-block
    my-8
    text-blue-900
    hover:underline
  `;
  const [prevChapterTitle, nextChapterTitle] = [
    "10. Partial Prerendering",
    "11. Adding Search and Pagination",
  ];
  const [prevChapterLink, nextChapterLink] = [
    "partial-prerendering",
    "adding-search-and-pagination",
  ];
  const chapters = [
    { title: `Prev Chapter: ${prevChapterTitle}`, href: prevChapterLink },
    { title: `Next Chapter: ${nextChapterTitle}`, href: nextChapterLink },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {chapters.map((chapter, index) => (
            <Fragment key={index}>
              <ChapterLink
                href={`https://nextjs.org/learn/dashboard-app/${chapter.href}`}
              >{chapter.title}
              </ChapterLink>
              {index < chapters.length - 1 && <hr />}
            </Fragment>
          ))}
        </h1>
      </div>
    </main>
  );
}
