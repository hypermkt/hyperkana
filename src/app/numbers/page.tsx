"use client";

import { numbers } from "@/app/constants/hiragana";
import KanaTitle from "@/app/components/KanaTitle";
import AnchorButton from "../components/AnchorButton";

export default function NumbersPage() {
  const title = numbers.title;
  const colors = numbers.colors;
  const groups = numbers.groups;

  return (
    <div className="p-4">
      <KanaTitle title={title} colors={colors} />
      {groups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-rowl justify-center gap-4 w-full"
        >
          {group.map((char, charIndex) => (
            <div
              key={charIndex}
              className="border-sky-500 border-4 p-2 text-4xl min-w-[10rem] min-h-[10rem] flex items-center justify-center m-2"
            >
              <span className="text-8xl">{char}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <AnchorButton href="/">もどる</AnchorButton>
      </div>
    </div>
  );
}
