import { getNextCharacter, getPreviousCharacter } from "./hiragana";

describe("getNextCharacter", () => {
  test("ひらがなの次の文字を取得する", () => {
    expect(getNextCharacter("hiragana", "あ")).toBe("い");
    expect(getNextCharacter("hiragana", "い")).toBe("う");
    expect(getNextCharacter("hiragana", "う")).toBe("え");
    expect(getNextCharacter("hiragana", "え")).toBe("お");
    expect(getNextCharacter("hiragana", "お")).toBe("か");
    expect(getNextCharacter("hiragana", "よ")).toBe("ら");
    expect(getNextCharacter("hiragana", "ん")).toBe("あ");
  });

  test("カタカナの次の文字を取得する", () => {
    expect(getNextCharacter("katakana", "ア")).toBe("イ");
    expect(getNextCharacter("katakana", "イ")).toBe("ウ");
    expect(getNextCharacter("katakana", "ウ")).toBe("エ");
    expect(getNextCharacter("katakana", "エ")).toBe("オ");
    expect(getNextCharacter("katakana", "オ")).toBe("カ");
    expect(getNextCharacter("katakana", "ヨ")).toBe("ラ");
    expect(getNextCharacter("katakana", "ン")).toBe("ア");
  });

  test("存在しない文字を渡した場合は空文字を返す", () => {
    expect(getNextCharacter("hiragana", "invalid")).toBe("");
    expect(getNextCharacter("katakana", "invalid")).toBe("");
  });
});

describe("getPreviousCharacter", () => {
  test("ひらがなの前の文字を取得する", () => {
    expect(getPreviousCharacter("hiragana", "あ")).toBe("ん");
    expect(getPreviousCharacter("hiragana", "い")).toBe("あ");
    expect(getPreviousCharacter("hiragana", "う")).toBe("い");
    expect(getPreviousCharacter("hiragana", "え")).toBe("う");
    expect(getPreviousCharacter("hiragana", "お")).toBe("え");
    expect(getPreviousCharacter("hiragana", "ら")).toBe("よ");
  });

  test("カタカナの前の文字を取得する", () => {
    expect(getPreviousCharacter("katakana", "ア")).toBe("ン");
    expect(getPreviousCharacter("katakana", "イ")).toBe("ア");
    expect(getPreviousCharacter("katakana", "ウ")).toBe("イ");
    expect(getPreviousCharacter("katakana", "エ")).toBe("ウ");
    expect(getPreviousCharacter("katakana", "オ")).toBe("エ");
    expect(getPreviousCharacter("katakana", "ラ")).toBe("ヨ");
  });

  test("存在しない文字を渡した場合は空文字を返す", () => {
    expect(getPreviousCharacter("hiragana", "invalid")).toBe("");
    expect(getPreviousCharacter("katakana", "invalid")).toBe("");
  });
});
