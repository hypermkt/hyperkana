"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function HiraganaDetail() {
  const params = useParams() as { letter: string };
  const encodedLetter = params.letter;
  if (!encodedLetter) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        文字が見つかりません
      </div>
    );
  }

  const letter = decodeURIComponent(encodedLetter);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow flex items-center justify-center">
        <span className="text-[30rem] text-gray-300">{letter}</span>
      </div>

      <div className="p-4 flex justify-center">
        <Link href="/hiragana">
          <button className="btn btn-primary btn-lg text-4xl">もどる</button>
        </Link>
      </div>
    </div>
  );
}
