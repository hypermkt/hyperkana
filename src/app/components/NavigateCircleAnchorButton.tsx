import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface NavigateButtonProps {
  direction: 'left' | 'right';
  letterType: 'hiragana' | 'katakana' | 'numbers';
  letter: string;
}

export default function NavigateCircleAnchorButton({
  direction,
  letterType,
  letter,
}: NavigateButtonProps) {
  const directionIcon = direction === 'left' ? faCaretLeft : faCaretRight;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl font-bold mb-3">{letter}</div>
      <button className="btn btn-circle btn-accent w-20 h-20">
        <Link href={`/letters/${letterType}/${letter}`}>
          <FontAwesomeIcon icon={directionIcon} className="text-7xl" />
        </Link>
      </button>
    </div>
  );
}
