import Link from "next/link";

export default function HiraganaList() {
  // タイトル文字列
  const title = "あいうえおひょう";
  // 各文字に対応する背景色のクラス（必要に応じて色を変更できます）
  const colors = [
    "bg-sky-500", // 水色
    "bg-blue-500", // 青
    "bg-teal-500", // 青緑
    "bg-indigo-500", // 藍
    "bg-purple-500", // 紫
    "bg-pink-500", // ピンク
    "bg-red-500", // 赤
    "bg-yellow-500", // 黄
  ];

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
      <div className="flex justify-center gap-2 mb-4">
        {title.split("").map((char, index) => (
          <div
            key={index}
            className={`w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full text-white text-4xl lg:text-5xl font-bold ${
              colors[index % colors.length]
            }`}
          >
            {char}
          </div>
        ))}
      </div>
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
