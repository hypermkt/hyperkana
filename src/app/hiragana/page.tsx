import Link from "next/link";

export default function HiraganaList() {
  const gojuonColumns = [
    ["あ", "い", "う", "え", "お"], // あ行
    ["か", "き", "く", "け", "こ"], // か行
    ["さ", "し", "す", "せ", "そ"], // さ行
    ["た", "ち", "つ", "て", "と"], // た行
    ["な", "に", "ぬ", "ね", "の"], // な行
    ["は", "ひ", "ふ", "へ", "ほ"], // は行
    ["ま", "み", "む", "め", "も"], // ま行
    ["や", "", "ゆ", "", "よ"], // や行
    ["ら", "り", "る", "れ", "ろ"], // ら行
    ["わ", "", "を", "", "ん"], // わ行
  ];

  return (
    <div className="p-8">
      <h1 className="text-6xl md:text-6xl font-bold mb-8 text-center">
        あいうえおひょう
      </h1>

      {/* flex で右から左に並べる */}
      <div className="flex flex-row-reverse justify-center gap-4 max-w-4xl mx-auto">
        {gojuonColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center gap-2">
            {column.map((char, rowIndex) => (
              <div
                key={rowIndex}
                className="w-20 h-20 border flex items-center justify-center text-6xl border-sky-500 border-4"
              >
                {char ? (
                  <Link href={`/hiragana/${char}`}>{char}</Link>
                ) : (
                  "" // 空セルの場合は何も表示しない
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
