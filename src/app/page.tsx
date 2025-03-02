import AnchorButtonComponent from "./components/AnchorButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-base-200 px-3">
      <h1 className="text-6xl md:text-6xl font-bold mb-8 text-center max-w-md">
        もじをなぞってあそぼう！
      </h1>
      <div className="m-3">
        <AnchorButtonComponent href={"/letters/hiragana"}>
          ひらがな
        </AnchorButtonComponent>
      </div>
      <div className="m-3">
        <AnchorButtonComponent href={"/letters/katakana"}>
          カタカナ
        </AnchorButtonComponent>
      </div>
      <div className="m-3">
        <AnchorButtonComponent href={"/numbers"}>すうじ</AnchorButtonComponent>
      </div>
    </main>
  );
}
