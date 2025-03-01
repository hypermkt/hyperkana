export const hiragana = {
  title: "あいうえおひょう",
  colors: [
    "bg-sky-500", // 水色
    "bg-blue-500", // 青
    "bg-teal-500", // 青緑
    "bg-indigo-500", // 藍
    "bg-purple-500", // 紫
    "bg-pink-500", // ピンク
    "bg-red-500", // 赤
    "bg-yellow-500", // 黄
  ],
  groups: [
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
  ],
};

export const katakana = {
  title: "アイウエオヒョウ",
  colors: [
    "bg-sky-500", // 水色
    "bg-blue-500", // 青
    "bg-teal-500", // 青緑
    "bg-indigo-500", // 藍
    "bg-purple-500", // 紫
    "bg-pink-500", // ピンク
    "bg-red-500", // 赤
    "bg-yellow-500", // 黄
  ],
  groups: [
    ["ア", "イ", "ウ", "エ", "オ"], // ア行
    ["カ", "キ", "ク", "ケ", "コ"], // カ行
    ["サ", "シ", "ス", "セ", "ソ"], // サ行
    ["タ", "チ", "ツ", "テ", "ト"], // タ行
    ["ナ", "ニ", "ヌ", "ネ", "ノ"], // ナ行
    ["ハ", "ヒ", "フ", "ヘ", "ホ"], // ハ行
    ["マ", "ミ", "ム", "メ", "モ"], // マ行
    ["ヤ", "ユ", "ヨ", "", ""], // ヤ行（3文字）
    ["ラ", "リ", "ル", "レ", "ロ"], // ラ行
    ["ワ", "ヲ", "ン", "", ""], // ワ行（3文字）
  ],
};

function removeEmptyStrings(groups: string[][]): string[][] {
  return groups.map((group) => group.filter((char) => char !== ""));
}

export function getNextLetter(
  type: "hiragana" | "katakana",
  currentChar: string
): string {
  const chars = removeEmptyStrings(
    type === "hiragana" ? hiragana.groups : katakana.groups
  );
  for (let i = 0; i < chars.length; i++) {
    const group = chars[i];
    for (let j = 0; j < group.length; j++) {
      if (group[j] === currentChar) {
        if (j + 1 < group.length) {
          return group[j + 1];
        } else if (i + 1 < chars.length) {
          return chars[i + 1][0];
        } else {
          return chars[0][0];
        }
      }
    }
  }
  return "";
}

export function getPreviousLetter(
  type: "hiragana" | "katakana",
  currentChar: string
): string {
  const chars = removeEmptyStrings(
    type === "hiragana" ? hiragana.groups : katakana.groups
  );
  for (let i = 0; i < chars.length; i++) {
    const group = chars[i];
    for (let j = 0; j < group.length; j++) {
      if (group[j] === currentChar) {
        if (j - 1 >= 0) {
          return group[j - 1];
        } else if (i - 1 >= 0) {
          return chars[i - 1][chars[i - 1].length - 1];
        } else {
          return chars[chars.length - 1][chars[chars.length - 1].length - 1];
        }
      }
    }
  }
  return "";
}
