import Link from "next/link";
import "./PPRQuiz.css";
export default () => {
  return (
    <main className="links-wrapper">
    <h1>Choose Chapter to Check Your Knowledge!</h1>
    <hr />
    <br />
    <section className="chapters">
      {[
        "Getting Started",
        "CSS Styling",
        "Optimizing Fonts and Images",
        "Creating Layouts and Pages",
        "Navigating Between Pages",
        "Setting Up Your Database",
        "Fetching Data",
        "Static and Dynamic Rendering",
        "Streaming",
        "Partial Prerendering",
        "Adding Search and Pagination",
        "Mutating Data",
        "Handling Errors",
        "Improving Accessibility Adding Authentication",
        "Adding Metadata",
      ].map((title, index) => {
        return (
          <Link
            key={index}
            href={`/course/chapters/${++index}`}
          >
            {index}. {title}
          </Link>
        );
      })}
      </section>
    </main>
  );
};
