import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavigateButtonProps {
  letterType: "hiragana" | "katakana";
  letter: string;
}

export default function NavigateCircleAnchorButton({
  letterType,
  letter,
}: NavigateButtonProps) {
  return (
    <div>
      <div>{letter}</div>
      <button className="btn btn-circle btn-accent">
        <Link href={`/letters/${letterType}/${letter}`}>
          <FontAwesomeIcon icon={faCaretRight} className="text-3xl" />
        </Link>
      </button>
    </div>
  );
}
