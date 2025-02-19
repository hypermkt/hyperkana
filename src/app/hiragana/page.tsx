import Link from "next/link";

export default function HiraganaList() {
  const groups = [
    ["あ", "い", "う", "え", "お"], // あ行
    ["か", "き", "く", "け", "こ"], // か行
    ["さ", "し", "す", "せ", "そ"], // さ行
    ["た", "ち", "つ", "て", "と"], // た行
    ["な", "に", "ぬ", "ね", "の"], // な行
    ["は", "ひ", "ふ", "へ", "ほ"], // は行
    ["ま", "み", "む", "め", "も"], // ま行
    ["や", "ゆ", "よ", "", ""], // や行（3文字）
    ["ら", "り", "る", "れ", "ろ"], // ら行
    ["わ", "を", "ん", "", ""], // わ行（3文字）
  ];

  return (
    <div className="p-4">
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-4">
        あいうえおひょう
      </h1>
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
                  <Link href={`/hiragana/${char}`}>{char}</Link>
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
    </div>
  );
}
