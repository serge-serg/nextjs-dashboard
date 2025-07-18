import Link from "next/link";
export default ({ textColor = "text-yellow-600" }: { textColor?: string }) => (
  <Link
    href="/last-chapter"
    className={`absolute ${textColor}`}
    style={{
      fontSize: "1.2rem",
      right: "54px",
      top: "44px",
    }}
  >
    Last Chapter
  </Link>
);
