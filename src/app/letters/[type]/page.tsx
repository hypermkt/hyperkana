'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { hiragana, katakana } from '@/app/constants/hiragana';
import KanaTitle from '@/app/components/KanaTitle';
import AnchorButton from '@/app/components/AnchorButton';

export default function CharactersPage() {
  const params = useParams() as { type: string };

  const type = params.type;
  const title = type == 'hiragana' ? hiragana.title : katakana.title;
  const colors = type == 'hiragana' ? hiragana.colors : katakana.colors;
  const groups = type == 'hiragana' ? hiragana.groups : katakana.groups;

  return (
    <div className="p-4">
      <KanaTitle title={title} colors={colors} />
      <div className="flex flex-row-reverse justify-evenly gap-4 w-full">
        {groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-col items-center space-y-2 flex-1"
          >
            {group.map((char, index) =>
              char ? (
                <div
                  key={index}
                  className="border-sky-500 border-4 p-2 text-4xl min-w-[3rem] min-h-[3rem] flex items-center justify-center lg:border-7 lg:text-6xl"
                >
                  <Link href={`/letters/${type}/${char}`}>{char}</Link>
                </div>
              ) : (
                <div
                  key={index}
                  className="p-2 min-w-[3rem] min-h-[3rem]"
                ></div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <AnchorButton href={'/'}>もどる</AnchorButton>
      </div>
    </div>
  );
}
