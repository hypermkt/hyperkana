import { getNextLetter, getPreviousLetter } from "./hiragana";

describe("getNextLetter", () => {
  test("ひらがなの次の文字を取得する", () => {
    expect(getNextLetter("hiragana", "あ")).toBe("い");
    expect(getNextLetter("hiragana", "い")).toBe("う");
    expect(getNextLetter("hiragana", "う")).toBe("え");
    expect(getNextLetter("hiragana", "え")).toBe("お");
    expect(getNextLetter("hiragana", "お")).toBe("か");
    expect(getNextLetter("hiragana", "よ")).toBe("ら");
    expect(getNextLetter("hiragana", "ん")).toBe("あ");
  });

  test("カタカナの次の文字を取得する", () => {
    expect(getNextLetter("katakana", "ア")).toBe("イ");
    expect(getNextLetter("katakana", "イ")).toBe("ウ");
    expect(getNextLetter("katakana", "ウ")).toBe("エ");
    expect(getNextLetter("katakana", "エ")).toBe("オ");
    expect(getNextLetter("katakana", "オ")).toBe("カ");
    expect(getNextLetter("katakana", "ヨ")).toBe("ラ");
    expect(getNextLetter("katakana", "ン")).toBe("ア");
  });

  test("数字の次の文字を取得する", () => {
    expect(getNextLetter("numbers", "0")).toBe("1");
    expect(getNextLetter("numbers", "9")).toBe("0");
  });

  test("存在しない文字を渡した場合は空文字を返す", () => {
    expect(getNextLetter("hiragana", "invalid")).toBe("");
    expect(getNextLetter("katakana", "invalid")).toBe("");
  });
});

describe("getPreviousLetter", () => {
  test("ひらがなの前の文字を取得する", () => {
    expect(getPreviousLetter("hiragana", "あ")).toBe("ん");
    expect(getPreviousLetter("hiragana", "い")).toBe("あ");
    expect(getPreviousLetter("hiragana", "う")).toBe("い");
    expect(getPreviousLetter("hiragana", "え")).toBe("う");
    expect(getPreviousLetter("hiragana", "お")).toBe("え");
    expect(getPreviousLetter("hiragana", "ら")).toBe("よ");
  });

  test("カタカナの前の文字を取得する", () => {
    expect(getPreviousLetter("katakana", "ア")).toBe("ン");
    expect(getPreviousLetter("katakana", "イ")).toBe("ア");
    expect(getPreviousLetter("katakana", "ウ")).toBe("イ");
    expect(getPreviousLetter("katakana", "エ")).toBe("ウ");
    expect(getPreviousLetter("katakana", "オ")).toBe("エ");
    expect(getPreviousLetter("katakana", "ラ")).toBe("ヨ");
  });

  test("数字の前の文字を取得する", () => {
    expect(getPreviousLetter("numbers", "0")).toBe("9");
    expect(getPreviousLetter("numbers", "1")).toBe("0");
  });

  test("存在しない文字を渡した場合は空文字を返す", () => {
    expect(getPreviousLetter("hiragana", "invalid")).toBe("");
    expect(getPreviousLetter("katakana", "invalid")).toBe("");
  });
});
