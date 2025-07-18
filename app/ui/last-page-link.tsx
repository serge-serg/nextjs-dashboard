import Link from "next/link";

interface Props {
  textColor?: string;
}

export default (props: Props) => {
  const textColor = (!props.textColor && "text-yellow-600") || props.textColor;
  console.log("pops.textColor", props.textColor);
  return (
    <div
      className="absolute"
      style={{
        fontSize: "1.2rem",
        right: `${props.textColor ? 54 : 62}px`,
        top: "44px",
      }}
    >
      {props.textColor && (
        <>
          <Link href="/dashboard" className={textColor}>
            Dashboard
          </Link>
        </>
      )}
      {props.textColor !== "text-blue-600" && (
        <>
          <br />
          <Link href="/last-chapter" className={textColor}>
            Last Chapter
          </Link>
          {props.textColor ? <br /> : <span> | </span>}
          <Link href="/notes" className={textColor}>
            Notes
          </Link>
        </>
      )}
    </div>
  );
};
